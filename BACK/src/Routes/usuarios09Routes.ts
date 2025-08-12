import * as usuarios09Controllers from "../Controllers/usuarios09Controllers.js"
import { authenticate } from "../Middlewares/auth.js"
import express from "express"


const router = express.Router()


router.get("/usuarios/usuario-por-id/:Id_Usuario", authenticate, usuarios09Controllers.gettingOne09Usuario)
router.get("/usuarios/todos-usuarios", authenticate, usuarios09Controllers.gettingAll09Usuarios)
router.post("/usuarios/login", usuarios09Controllers.login)


export default router