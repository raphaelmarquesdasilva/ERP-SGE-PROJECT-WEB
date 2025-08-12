import { PrismaClient } from "../prisma/generated/06/index.js";

const prisma06 = new PrismaClient()


export const gettingOne06Usuario = async (Id_Usuario: number) => {
    const usuario = await prisma06.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        }
    })

    return usuario
}

export const gettingAll06Usuarios = async () => {
    const usuarios = prisma06.usuarios.findMany()

    return usuarios
}


export const checkingOne06Usuario = async (Usuario: string) => {
    const usuario = await prisma06.usuarios.findFirst({
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