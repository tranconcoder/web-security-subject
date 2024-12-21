import type { Request } from 'express';
import type { WebSocketCustom } from '../types/ws';

// Websocket
import url from 'url';
import { v4 as uuidv4 } from 'uuid';
import { WebSocketServer } from 'ws';
import { WebSocketSourceEnum } from '../enums/ws.enum';
// Analytics
import { WebsocketAnalytics } from './websocketAnalytics.service';
// Stream
import {
	readStreamEsp32CamMonitorImg,
	readStreamEsp32CamSecurityGateImg,
} from './stream.service';

const websocketAnalytics = new WebsocketAnalytics(0, 0, 10_000);
websocketAnalytics.startAnalytics();

export default function runWebsocketService(
	wss: WebSocketServer,
	HOST: string,
	PORT: number
) {
	wss.on(
		'connection',
		function connection(ws: WebSocketCustom, req: Request) {
			// Validate connection
			const { query } = url.parse(req.url, true);
			let source = query.source || WebSocketSourceEnum.INVALID_SOURCE;
			if (Array.isArray(source)) source = source[0];

			// Set connection state
			ws.id = uuidv4();
			ws.source = source as string;
			ws.on('error', console.error);

			console.log(`Client ${ws.id} connected`);

			switch (ws.source) {
				case WebSocketSourceEnum.ESP32CAM_SECURITY_GATE_SEND_IMG:
					// Handle append video frames to stream
					ws.on('message', async function message(buffer: Buffer) {
						websocketAnalytics.transferData(buffer.byteLength, 1);
						readStreamEsp32CamSecurityGateImg.push(buffer);
					});
					break;

				case WebSocketSourceEnum.ESP32CAM_MONITOR_SEND_IMG:
					ws.on('message', async function message(buffer: Buffer) {
						readStreamEsp32CamMonitorImg.push(buffer);
					});
					break;

				case WebSocketSourceEnum.INVALID_SOURCE:
				default:
					console.log('Source is not valid!');
					ws.close();
			}
		}
	);

	wss.on('listening', () => {
		console.log(`WebSocket Server is listening on ws://${HOST}:${PORT}`);
	});

	wss.on('error', console.log);

	wss.on('close', () => {
		console.log('Websocket is closed!');
	});
}
