import express from "express"
import * as usuarios03Controllers from "../Controllers/usuarios03Controllers.js"
import { authenticate } from "../Middlewares/auth.js"

const router = express.Router()


router.get(`/usuarios/todos-usuarios`, authenticate, usuarios03Controllers.gettingAll03Usuarios)
router.get(`/usuarios/usuario-por-id/:Id_Usuario`, authenticate, usuarios03Controllers.gettingOne03Usuario)
router.post(`/usuarios/login`, usuarios03Controllers.login)


export default router