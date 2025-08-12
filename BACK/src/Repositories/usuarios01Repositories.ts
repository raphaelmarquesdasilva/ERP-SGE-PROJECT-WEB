import { PrismaClient } from "../prisma/generated/01/index.js"



const prisma01 = new PrismaClient()

export const checking01UsuarioExistence = async (Usuario: string) => {
    const usuario = await prisma01.usuarios.findFirst({
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


export const gettingAllUsuarios = async () => {
    const usuarios = prisma01.usuarios.findMany()

    return usuarios
}

export const gettingOne01Usuario = async (Id_Usuario: number) => {
    const usuario = prisma01.usuarios.findUnique({
        where: {
            Id_Usuario: Id_Usuario
        }
    })

    return usuario
}

