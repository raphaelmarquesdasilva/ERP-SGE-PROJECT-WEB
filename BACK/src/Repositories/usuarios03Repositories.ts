import { PrismaClient } from "../prisma/generated/03/index.js";

export const prisma03 = new PrismaClient()


export const checkingOne03Usuario = async (Usuario: string) => {
    const usuario = await prisma03.usuarios.findFirst({
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

export const gettingOne03Usuario = async (Id_Usuario: number) => {
    const usuario = await prisma03.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        }
    })

    return usuario
}


export const gettingAll03Usuarios = async () => {
    const usuarios = await prisma03.usuarios.findMany()

    return usuarios
}