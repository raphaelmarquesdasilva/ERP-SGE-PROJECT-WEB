import * as usuarios10Controllers from "../Controllers/usuarios10Controllers.js"
import { authenticate } from "../Middlewares/auth.js"
import express from "express"


const router = express.Router()


router.get("/usuarios/usuario-por-id/:Id_Usuario", authenticate, usuarios10Controllers.gettingOne10Usuario)
router.get("/usuarios/todos-usuarios", authenticate, usuarios10Controllers.gettingAll10Usuarios)
router.post("/usuarios/login", usuarios10Controllers.login)


export default router