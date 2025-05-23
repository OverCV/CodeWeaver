import { inicializarTelegram } from "../../api/telegram";
import { ITelegramService } from "../../application/services/itelegram.service";

export class TelegramService implements ITelegramService {
	enviarMensaje(message: string): void {

		const telegramChatBot = inicializarTelegram()
		if (!telegramChatBot) {
			throw new Error("Error al inicializar el servicio de notificaciones Telegram")
		}
		telegramChatBot.sendMessage(message)
	}
}
