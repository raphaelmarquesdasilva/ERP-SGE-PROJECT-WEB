import { PrismaClient } from "../prisma/generated/04/index.js"


const prisma04 = new PrismaClient()

export const checkingOne04Usuario = async (Usuario: string) => {
    const usuario = await prisma04.usuarios.findFirst({
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


export const gettingAll04Usuarios = async () => {
    const usuarios = await prisma04.usuarios.findMany()

    return usuarios
}

export const gettingOne04Usuario = async (Id_Usuario: number) => {
    const usuario = await prisma04.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        }
    })

    return usuario
}