const {ConnectionDataBase} = require("../database")

const verLibros = async (req,res) => {
    const connection = await ConnectionDataBase()
    const result = await connection.query("SELECT * FROM libros")
    res.json(result[0])
    connection.end()
}

const verLibrosPorId = async (req, res) => {
    const connection = await ConnectionDataBase()
    const id = req.params.id
    const result = await connection.query("SELECT * FROM libros WHERE idLibro = ?", id)
    res.json(result[0])
    connection.end()
}

const subirLibro = async (req, res) => {
    const connection = await ConnectionDataBase()
    const {nombreLibro, autor} = req.body;
    await connection.query("INSERT INTO libros (nombreLibro, autor) VALUES (?,?)", [nombreLibro, autor])
    res.send("Libro Creado")
    connection.end()
}

const borrarLibro = async (req, res) => {
    const connection = await ConnectionDataBase()
    const id = req.params.id
    await connection.query("DELETE FROM `libros` WHERE idLibro = ?", id)
    res.send("Libro Eliminado")
    connection.end()
}

const actualizarLibro = async (req,res) =>{
    const connection = await ConnectionDataBase()
    const id = req.params.id
    await connection.query("UPDATE `libros` SET `nombreLibro`= ?,`autor`= ? WHERE idLibro = ?", [req.body.nombreLibro, req.body.autor, req.params.id ])
    res.send("Libro Actualizado")
    connection.end()
}

module.exports = {verLibros, verLibrosPorId, subirLibro, borrarLibro, actualizarLibro}