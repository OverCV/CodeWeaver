import { inicializarTelegram } from ".";

export class TelegramApi {
	private async escucharMensaje(
		text: string, chatId: number
	): Promise<void> {
		const telegramBot = inicializarTelegram()
		if (!telegramBot) {
			throw new Error("Error al inicializar el servicio de notificaciones Telegram")
		}

		telegramBot.on('message', (msg) => {
			const chatId = msg.chat.id
			const text = msg.text

			// interfaz de validación

			// interfaz del LLLM Planeador

			console.log(`Mensaje recibido de ${chatId}: ${text}`)
		})

	}
}