import jwt, { type Secret, type JwtPayload } from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"


export type authPayLoad = JwtPayload & { Id_Usuario: number }


const jwt_secret_env = process.env.JWT_SECRET

if (!jwt_secret_env) {
    throw new Error(`JWT SECRET não declarado.`)
}
const secret: Secret = jwt_secret_env

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
   
    const token = req.headers?.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: `Token ausente.` })
    }

    try {
        const verified = jwt.verify(token, secret) as authPayLoad
        req.user = verified
        return next()
    } catch (error) {
        return res.status(401).json({ message: `Erro no authenticate`, Erro: error })
    }
}