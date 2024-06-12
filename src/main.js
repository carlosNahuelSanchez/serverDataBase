const express = require('express');
const app = express()
const {ConnectionDataBase} = require("./database")
const {router} = require("./routes/main.routes")

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Registro de libros")
})

app.use("/", router);



app.listen(3000)
console.log("Server Running in port" , 3000)
