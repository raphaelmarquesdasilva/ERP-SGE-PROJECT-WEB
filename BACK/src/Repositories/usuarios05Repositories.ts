import { PrismaClient } from "../prisma/generated/05/index.js"


const prisma05 = new PrismaClient()

export const gettingOne05Usuario = async (Id_Usuario: number) => {
    const usuario = await prisma05.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        },
        select: {
            Id_Usuario: true,
            Usuario: true,
            Senha: true
        }
    })

    return usuario
}

export const gettingAll05Usuarios = async () => {
    const usuarios = await prisma05.usuarios.findMany()

    return usuarios
}

export const checkingOne05Usuario = async (Usuario: string) => {
    const usuario = await prisma05.usuarios.findFirst({
        where: {
            Usuario: Usuario
        },
        select: {
            Id_Usuario: true,
            Usuario: true,
            Senha: true
        }
    })

    return usuario
}
