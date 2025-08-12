import { PrismaClient } from "../prisma/generated/07/index.js";

const prisma07 = new PrismaClient()


export const gettingOne07Usuario = async (Id_Usuario: number) => {
    const usuario = await prisma07.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        }
    })

    return usuario
}

export const gettingAll07Usuarios = async () => {
    const usuarios = prisma07.usuarios.findMany()

    return usuarios
}


export const checkingOne07Usuario = async (Usuario: string) => {
    const usuario = await prisma07.usuarios.findFirst({
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