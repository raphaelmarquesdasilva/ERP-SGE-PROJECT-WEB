import * as usuarios03Repositories from "../Repositories/usuarios03Repositories.js"
import type { Request, Response } from "express"
import { hashSenha } from "../Utils/hash.js"
import jwt, {type Secret} from "jsonwebtoken"
import { usuarioValidation } from "../Validations/loginValidation.js"
import { senhaValidation } from "../Validations/senhaValidation.js"


export const gettingAll03Usuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await usuarios03Repositories.gettingAll03Usuarios()
        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const gettingOne03Usuario = async (req: Request,res: Response) => {
    const Id_Usuario = Number(req.params.Id_Usuario)
    try {
        const usuario = await usuarios03Repositories.gettingOne03Usuario(Id_Usuario)
        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({message: `Erro ao buscar usuario`, Erro: error})
    }
}

export const login = async (req: Request, res: Response) => {
    const { Usuario, Senha } = req.body
    try {

        usuarioValidation(Usuario)
        senhaValidation(Senha)
        const usuario = await usuarios03Repositories.checkingOne03Usuario(Usuario)

        if (!usuario) {
            return res.status(404).json({message: `Usuário ${Usuario} não foi encontrado.`})
        }

        const checkSenha = hashSenha(Senha.toUpperCase())

        if (checkSenha.trim() !== usuario.Senha?.trim()) {
            return res.status(401).json({message: `Credenciais inválidas.`})
        }
        
        const jwt_secret_env = process.env.JWT_SECRET

        if (!jwt_secret_env) {
            return res.status(401).json({message: `JWT SECRET não declarado.`})
        }

        const secret: Secret = jwt_secret_env

        const token = jwt.sign({Id_Usuario: usuario.Id_Usuario}, secret, {expiresIn: "1h"})

        return res.status(200).json({message: `Login efetuado com sucesso na LOJA 03`, token: token})
    } catch (error: any) {
        return res.status(401).json({message: `Erro ao tentar fazer login`, Erro: error.message})
    }
    
}