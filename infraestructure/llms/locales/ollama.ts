import { ILLM } from "../../../domain/interfaces/llms.interface";

export class Ollama implements ILLM {

	inicializar(): void {
		// Acá poner la clave, etc
	}

	enviarContexto(contexto: string): Promise<void> {
		throw new Error("Method not implemented.");
	}

	enviarPrompt(prompt: string): Promise<string> {
		throw new Error("Method not implemented.");
	}
}