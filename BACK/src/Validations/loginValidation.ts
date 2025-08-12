export const usuarioValidation = (Usuario: string) => {
    if (typeof Usuario !== "string") {
        throw new Error(`Campo usuário com formato inválido.`)
    }

    const trimmed = Usuario.trim()

    if (trimmed === "" ) {
        throw new Error(`Campo usuário deve ser devidamente preenchido.`)
    }

    if (trimmed.length > 30) {
        throw new Error(`Campo usuário não pode conter mais que 30 caracteres`)
    }

    return trimmed
}