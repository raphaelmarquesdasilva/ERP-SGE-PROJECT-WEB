import { PrismaClient } from "../prisma/generated/08/index.js";

const prisma08 = new PrismaClient()


export const gettingOne08Usuario = async (Id_Usuario: number) => {
    const usuario = await prisma08.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        }
    })

    return usuario
}

export const gettingAll08Usuarios = async () => {
    const usuarios = prisma08.usuarios.findMany()

    return usuarios
}


export const checkingOne08Usuario = async (Usuario: string) => {
    const usuario = await prisma08.usuarios.findFirst({
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