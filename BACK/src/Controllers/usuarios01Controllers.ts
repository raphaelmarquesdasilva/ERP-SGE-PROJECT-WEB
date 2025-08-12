import * as usuarios01Repositories from "../Repositories/usuarios01Repositories.js"
import jwt, {type Secret} from "jsonwebtoken"
import { hashSenha } from "../Utils/hash.js"
import type { Request, Response } from "express"
import { usuarioValidation } from "../Validations/loginValidation.js"
import { senhaValidation } from "../Validations/senhaValidation.js"




export const gettingAll01Usuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await usuarios01Repositories.gettingAllUsuarios()
        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const gettingOne01Usuario = async (req: Request, res: Response) => {
    const Id_Usuario = Number(req.params.Id_Usuario)
    try {
        const usuario = await usuarios01Repositories.gettingOne01Usuario(Id_Usuario)
        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const login = async (req: Request, res: Response) => {
    const { Usuario, Senha } = req.body
    try {
       
        usuarioValidation(Usuario)
        senhaValidation(Senha)

        const usuario = await usuarios01Repositories.checking01UsuarioExistence(Usuario)
       
        if (!usuario) {
            throw new Error(`Usuário ${Usuario} não foi encontrado.`)
        }

        const checkSenha = hashSenha(Senha.toUpperCase())

        if (checkSenha.trim() !== usuario.Senha?.trim()) {
            throw new Error(`Credenciais inválidas.`)
        }

        const jwt_secret_env = process.env.JWT_SECRET

        if (!jwt_secret_env) {
            throw new Error(`JWT SECRET não está declarado.`)
        }

        const jwt_secret: Secret = jwt_secret_env

        const token = jwt.sign({Id_Usuario: usuario.Id_Usuario}, jwt_secret, {expiresIn: "1h"})

        return res.status(200).json({message: `Login efetuado com sucesso na LOJA 01`, token: token})

    } catch (error:  any) {
        return res.status(401).json({message: `Erro ao tentar fazer login`, Erro: error.message})
    }
}