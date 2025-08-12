import express from "express"
import cors from "cors"
import usuarios01Routes from "./Routes/usuarios01Routes.js"
import usuarios03Routes from "./Routes/usuarios03Routes.js"
import usuarios04Routes from "./Routes/usuarios04Routes.js"
import usuarios05Routes from "./Routes/usuarios05Routes.js"
import usuarios06Routes from "./Routes/usuarios06Routes.js"
import usuarios07Routes from "./Routes/usuarios07Routes.js"
import usuarios08Routes from "./Routes/usuarios08Routes.js"
import usuarios09Routes from "./Routes/usuarios09Routes.js"
import usuarios10Routes from "./Routes/usuarios10Routes.js"


const app = express()
app.use(express.json())
app.use(cors())



app.get("/", (req,res) => {
    return res.status(200).json({message: `Rota principal está funcionando normalmente.`})
})

app.use(`/1`, usuarios01Routes)
app.use(`/3`, usuarios03Routes)
app.use(`/4`, usuarios04Routes)
app.use(`/5`, usuarios05Routes)
app.use(`/6`, usuarios06Routes)
app.use(`/7`, usuarios07Routes)
app.use(`/8`, usuarios08Routes)
app.use(`/9`, usuarios09Routes)
app.use(`/10`, usuarios10Routes)


app.listen(process.env.BACK_PORT,  () => {
    console.log(`Server running on http://localhost:${process.env.BACK_PORT}`)
})
