import * as usuarios07Controllers from "../Controllers/usuarios07Controllers.js"
import { authenticate } from "../Middlewares/auth.js"
import express from "express"


const router = express.Router()


router.get("/usuarios/usuario-por-id/:Id_Usuario", authenticate, usuarios07Controllers.gettingOne07Usuario)
router.get("/usuarios/todos-usuarios", authenticate, usuarios07Controllers.gettingAll07Usuarios)
router.post("/usuarios/login", usuarios07Controllers.login)


export default router