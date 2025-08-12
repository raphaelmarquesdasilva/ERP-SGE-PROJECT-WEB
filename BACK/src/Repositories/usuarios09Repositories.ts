import { PrismaClient } from "../prisma/generated/09/index.js";

const prisma09 = new PrismaClient()


export const gettingOne09Usuario = async (Id_Usuario: number) => {
    const usuario = await prisma09.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        }
    })

    return usuario
}

export const gettingAll09Usuarios = async () => {
    const usuarios = prisma09.usuarios.findMany()

    return usuarios
}


export const checkingOne09Usuario = async (Usuario: string) => {
    const usuario = await prisma09.usuarios.findFirst({
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