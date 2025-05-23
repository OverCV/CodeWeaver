export interface ILLM {

	inicializar(): void
	enviarContexto(contexto: string): Promise<void>
	enviarPrompt(prompt: string): Promise<string>

}