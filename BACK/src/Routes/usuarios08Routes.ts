import * as usuarios08Controllers from "../Controllers/usuarios08Controllers.js"
import { authenticate } from "../Middlewares/auth.js"
import express from "express"


const router = express.Router()


router.get("/usuarios/usuario-por-id/:Id_Usuario", authenticate, usuarios08Controllers.gettingOne08Usuario)
router.get("/usuarios/todos-usuarios", authenticate, usuarios08Controllers.gettingAll08Usuarios)
router.post("/usuarios/login", usuarios08Controllers.login)


export default router