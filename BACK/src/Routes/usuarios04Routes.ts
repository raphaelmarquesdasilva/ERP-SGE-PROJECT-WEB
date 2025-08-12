import express from "express"
import * as usuarios04Controllers from "../Controllers/usuarios04Controllers.js"
import { authenticate } from "../Middlewares/auth.js"

const router = express.Router()


router.get("/usuarios/todos-usuarios", authenticate, usuarios04Controllers.gettingAll04Usuarios)
router.get("/usuarios/usuario-por-id/:Id_Usuario", authenticate, usuarios04Controllers.gettingOne04Usuario)
router.post("/usuarios/login", usuarios04Controllers.login)


export default router