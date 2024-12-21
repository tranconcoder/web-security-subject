import {
	FACE_RECOGNITION_SERVER_HOST,
	FACE_RECOGNITION_SERVER_PORT,
} from '../config/env.config';
import { RequestError } from '../config/handleError.config';
import { readStreamEsp32CamSecurityGateImg } from './stream.service';

export default class SecurityGateServices {
	public static async authDoor(rfidSerialNumber: string) {
		const TRANSFER_TIMEOUT = 5_000;

		async function handleData(data: Buffer) {
			const path = `http://${FACE_RECOGNITION_SERVER_HOST}:${FACE_RECOGNITION_SERVER_PORT}/recog`;
			const formData = new FormData();

			formData.append('image', data.toString('base64'));

			fetch(path, { method: 'POST', body: formData })
				.then((res) => res.text())
				.then((data) => console.log(data))
				.catch(() => {
					throw new RequestError(400, 'Server error!');
				});
		}

		readStreamEsp32CamSecurityGateImg.on('data', handleData);

		setTimeout(() => {
			readStreamEsp32CamSecurityGateImg.off('data', handleData);
		}, TRANSFER_TIMEOUT);
	}
}
