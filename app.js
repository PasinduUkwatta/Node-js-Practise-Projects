const express =require("express")
const cors =require("cors")

const planetRouter =require("./routes/planets/planets.router")
const app =express()

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use(planetRouter)

module.exports=app