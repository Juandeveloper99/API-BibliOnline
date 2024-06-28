const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "biblioteca",
    multiplestatements: true,

});

mysqlConexion.connect(
    (err) => {
    if(!err){
        console.log("Estoy conectando a al base de datos")
    }
    else{
        console.log("No estoy conectado. Error");
    }
   
});

module.exports = mysqlConexion;