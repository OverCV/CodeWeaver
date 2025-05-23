// meta/config/config.ts
import dotenv from 'dotenv'

// import { debug } from '../utils/files-logger.js'

// Cargar variables de entorno
dotenv.config()

const NODE_ENV = process.env.NODE_ENV || 'development'

export const config = {
	NODE_ENV,
	telegram: {
		token: process.env.TELEGRAM_TOKEN,
		chatId: process.env.TELEGRAM_CHAT_ID,

	}
}