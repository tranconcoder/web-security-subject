import 'dotenv/config';
import dotenv from 'dotenv';

export const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({ path: `.env.${NODE_ENV}` });

export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = Number(process.env.PORT) || 3000;

// Media server
export const MEDIA_SERVER_HOST = process.env.MEDIA_SERVER_HOST || '0.0.0.0';
export const MEDIA_SERVER_HOST_IP =
	process.env.MEDIA_SERVER_HOST_IP || '0.0.0.0';
export const MEDIA_SERVER_INPUT_PORT =
	Number(process.env.MEDIA_SERVER_INPUT_PORT) || 1935;
export const MEDIA_SERVER_OUTPUT_PORT =
	Number(process.env.MEDIA_SERVER_OUTPUT_PORT) || 8000;

// Face recognition server
export const FACE_RECOGNITION_SERVER_HOST =
	process.env.FACE_RECOGNITION_SERVER_HOST || '0.0.0.0';
export const FACE_RECOGNITION_SERVER_PORT =
	process.env.FACE_RECOGNITION_SERVER_PORT || 5001;
