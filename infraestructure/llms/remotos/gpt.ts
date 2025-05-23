import { ILLM } from "../../../domain/interfaces/llms.interface";

export class GPT implements ILLM {
	inicializar(): void { }

	enviarContexto(contexto: string): Promise<void> {

		throw new Error("Method not implemented.");
	}

	enviarPrompt(prompt: string): Promise<string> {
		throw new Error("Method not implemented.");
	}
}