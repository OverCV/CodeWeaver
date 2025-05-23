import TelegramBot from 'node-telegram-bot-api'
import { config } from '../../infraestructure/config'


export function inicializarTelegram() {
	const telegramBot: TelegramBot | null = null

	try {
		if (!(config.telegram?.token && config.telegram?.chatId)) {
			console.log('Notificaciones Telegram deshabilitadas (sin credenciales)')
		}
		if (!this.telegramBot) {
			this.telegramBot = new TelegramBot(config.telegram.token, { polling: true })
			this.enabled = true
			this.setupCommands()
			console.log('Servicio de notificaciones Telegram inicializado')

			this.telegramChatId = config.telegram.chatId
		}
	} catch (err: any) {
		console.error(`Error inicializando servicio de notificaciones: ${err.message}`, err)
	}
	return telegramBot
}