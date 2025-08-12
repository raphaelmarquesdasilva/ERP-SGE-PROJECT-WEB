import express from "express"
import * as usuarios01Controllers from "../Controllers/usuarios01Controllers.js"
import { authenticate } from "../Middlewares/auth.js"

const router = express.Router()

router.get(`/usuarios/todos-usuarios`, authenticate, usuarios01Controllers.gettingAll01Usuarios)
router.get(`/usuarios/usuario-por-id/:Id_Usuario`, authenticate, usuarios01Controllers.gettingOne01Usuario)
router.post(`/usuarios/login`, usuarios01Controllers.login)


export default router