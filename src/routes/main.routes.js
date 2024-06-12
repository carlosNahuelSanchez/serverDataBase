const express = require("express")
const { verLibros, verLibrosPorId, subirLibro, actualizarLibro, borrarLibro } = require("../controllers/main.controllers")
const router = express.Router()

router.get("/libros", verLibros)

router.get("/libros/:id", verLibrosPorId)

router.post("/libros", subirLibro)

router.put("/libros/:id", actualizarLibro)

router.delete("/libros/:id", borrarLibro)

module.exports = {router}
