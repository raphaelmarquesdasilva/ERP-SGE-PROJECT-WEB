import { PrismaClient } from "../prisma/generated/10/index.js";

const prisma10 = new PrismaClient()


export const gettingOne10Usuario = async (Id_Usuario: number) => {
    const usuario = await prisma10.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        }
    })

    return usuario
}

export const gettingAll10Usuarios = async () => {
    const usuarios = prisma10.usuarios.findMany()

    return usuarios
}


export const checkingOne10Usuario = async (Usuario: string) => {
    const usuario = await prisma10.usuarios.findFirst({
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