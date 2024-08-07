//crear un servidor con express
const express = require ('express');

//incliur el cors
const cors = require('cors');

//incluir la body-parcer (para procesar peticiones post)
const bodyParser = require('body-parser');

//incluir la conexcion mysql
const config = require ('./config');
const authRouter = require('./routes/authRoutes');

//crear un server con express
const app = express();

//usar el cors
app.use (cors());

//usar el body-parser para procesar peticiones POST
app.use(bodyParser.json());

//usar el puerto 3000
const port = 3000;

//crear una ruta por defecto
app.get ('/', (req, res) => {
    res.send('hello world')
});

app.use('/auth', authRouter); 

//iniciar el servidor
app.listen (port, ()  => {
console.log(`sever running on port ${port}`);
});