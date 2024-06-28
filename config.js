const mysql = require('mysql2'); 

const config = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '6012',
    database: 'biblioteca',
});

module.exports = config; 