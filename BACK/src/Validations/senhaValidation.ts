export const senhaValidation = (Senha: string) => {
    if (typeof Senha !== "string") {
        throw new Error(`Campo senha com formato inválido.`)
    }

    const trimmed = Senha.trim()

    if (trimmed === "" ) {
        throw new Error(`Campo senha deve ser devidamente preenchido.`)
    }

    if (trimmed.length > 20) {
        throw new Error(`Campo senha não pode conter mais que 20 caracteres.`)
    }

    return trimmed
}