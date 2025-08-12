import * as usuarios06Controllers from "../Controllers/usuarios06Controllers.js"
import { authenticate } from "../Middlewares/auth.js"
import express from "express"


const router = express.Router()


router.get("/usuarios/usuario-por-id/:Id_Usuario", authenticate, usuarios06Controllers.gettingOne06Usuario)
router.get("/usuarios/todos-usuarios", authenticate, usuarios06Controllers.gettingAll06Usuarios)
router.post("/usuarios/login", usuarios06Controllers.login)


export default router