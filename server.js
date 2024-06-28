const mysql = require(mysql);
const express = require ("express");
const bodyParser = require("express");
const mysqlConexion = require("./tabla_autores");

const autores = requiere("./routers/autores");
const cantidad = requiere("./routers/cantidad");
const libros = requiere("./routers/libros");
const prestamos = requiere("./routers/prestamos");
const usuarios = requiere("./routers/usuarios");
const categoria = requiere("./routers/categoria");

var app = express();
app.use(bodyParser.json());
app.use("/autores", autores);
app.use("/cantidad", cantidad);
app.use("/libros", libros);
app.use("/prestamos", prestamos);
app.use("/usuarios", usuarios);
app.use("/categoria", categoria);

app.listen(3000);