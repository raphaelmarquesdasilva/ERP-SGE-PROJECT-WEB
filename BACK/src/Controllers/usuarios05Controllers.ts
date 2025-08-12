import * as usuarios05Repositories from "../Repositories/usuarios05Repositories.js"
import type { Request, Response } from "express"
import { hashSenha } from "../Utils/hash.js"
import jwt, { type Secret } from "jsonwebtoken"
import { usuarioValidation } from "../Validations/loginValidation.js"
import { senhaValidation } from "../Validations/senhaValidation.js"



export const gettingOne05Usuario = async (req: Request, res: Response) => {
    const Id_Usuario = Number(req.params.Id_Usuario)
    try {
        const usuario = await usuarios05Repositories.gettingOne05Usuario(Id_Usuario)
        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(200).json({ message: `Erro ao tentar buscar usuário`, Erro: error })
    }
}

export const gettingAll05Usuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await usuarios05Repositories.gettingAll05Usuarios()
        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(500).json({ message: `Erro ao tentar listar todos os usuários`, Erro: error })
    }
}


export const login = async (req: Request, res: Response) => {
    const { Usuario, Senha } = req.body
    try {

        usuarioValidation(Usuario)
        senhaValidation(Senha)
        
        const checkUsuario = await usuarios05Repositories.checkingOne05Usuario(Usuario)

        if (!checkUsuario) {
            return res.status(401).json({ message: `Usuário ${Usuario} não foi encontrado.` })
        }

        const checkHash = hashSenha(Senha.toUpperCase())

        if (checkHash.trim() !== checkUsuario.Senha?.trim()) {
            return res.status(401).json({ message: `Credenciais inválidas.` })
        }

        const jwt_secret_env = process.env.JWT_SECRET

        if (!jwt_secret_env) {
            return res.status(401).json({ message: `JWT SECRET não declarado.` })
        }

        const secret: Secret = jwt_secret_env

        const token = jwt.sign({ Id_Usurio: checkUsuario.Id_Usuario }, secret, { expiresIn: "1h" })

        return res.status(200).json({ message: `Login efetuado com sucesso.`, token: token })
    } catch (error: any) {
        return res.status(401).json({message: `Erro ao tentar fazer login`, Erro: error.message})
    }
}