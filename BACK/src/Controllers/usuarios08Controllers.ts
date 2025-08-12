import * as usuarios08Repositories from "../Repositories/usuarios08Repositories.js"
import type { Request, Response } from "express"
import { hashSenha } from "../Utils/hash.js"
import jwt, { type Secret } from "jsonwebtoken"
import { usuarioValidation } from "../Validations/loginValidation.js"
import { senhaValidation } from "../Validations/senhaValidation.js"



export const gettingOne08Usuario = async (req: Request, res: Response) => {
    const Id_Usuario = Number(req.params.Id_Usuario)
    try {
        const usuario = await usuarios08Repositories.gettingOne08Usuario(Id_Usuario)
        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({ message: `Usuário não encontrado.`, Erro: error })
    }
}

export const gettingAll08Usuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await usuarios08Repositories.gettingAll08Usuarios()
        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(200).json({ message: `Erro ao tentar listar todos os usuários`, Erro: error })
    }
}



export const login = async (req: Request, res: Response) => {
    const { Usuario, Senha } = req.body
    try {

        usuarioValidation(Usuario)
        senhaValidation(Senha)
        
        const checkUsuario = await usuarios08Repositories.checkingOne08Usuario(Usuario)

        if (!checkUsuario) {
            return res.status(401).json({ message: `Usuário ${Usuario} não foi encontrado.` })
        }

        const hash = hashSenha(Senha.toUpperCase())

        if (hash.trim() !== checkUsuario.Senha?.trim()) {
            return res.status(401).json({ message: `Credenciais inválidas.` })
        }

        const jwt_secret_env = process.env.JWT_SECRET

        if (!jwt_secret_env) {
            return res.status(401).json({ message: `JWT SECRET não declarado.` })
        }

        const secret: Secret = jwt_secret_env

        const token = jwt.sign({ Id_Usuario: checkUsuario.Id_Usuario }, secret, { expiresIn: "1h" })

        return res.status(200).json({ message: `Login efetuado com sucesso.`, token: token })

    } catch (error: any) {
        return res.status(401).json({message: `Erro ao tentar fazer login`, Erro: error.message})
    }
} 