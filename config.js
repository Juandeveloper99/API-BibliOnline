const mysql = require('mysql2'); //usar la libreria4
const dotenv = require('dotenv');

dotenv.config();

//configurar la base de datos
const config = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS ,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

module.exports = config; // exportar la config