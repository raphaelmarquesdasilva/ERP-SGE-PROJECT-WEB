import * as usuarios05Controllers from "../Controllers/usuarios05Controllers.js"
import express from "express"
import { authenticate } from "../Middlewares/auth.js"



const router = express.Router()


router.get("/usuarios/usuario-por-id/:Id_Usuario", authenticate, usuarios05Controllers.gettingOne05Usuario)
router.get("/usuarios/todos-usuarios", authenticate, usuarios05Controllers.gettingAll05Usuarios)
router.post("/usuarios/login", usuarios05Controllers.login)


export default router