const express = require ('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const config = require ('./config');

const app = express();
exports.app = app;


app.use (cors());

app.use(bodyParser.json());

const port = 3000;

app.get ('/', (req, res) => {
    res.send('hello world')
});

app.get ('/autores', (req, res) => {

config.query('select * From autores', (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los autores');

    }else {
        res.json(filas);
    }

});
}
)
app.get ('/libros', (req, res) => {

config.query('select * From libros', (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener el libro');

    }else {
        res.json(filas);
    }
});
}
)


app.get ('/cantidad', (req, res) => {

config.query('select * From cantidad', req.params.id,  (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener la cantidad');

    }else {
        res.json(filas);
    }
});
}
)
config.query('select * From categorias', req.params.id,  (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener las categorias');

    }else {
        res.json(filas);
    }
});

config.query('select * from usuarios', req.params.id,  (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los usuarios');

    }else {
        res.json(filas);
    }
});

config.query('select * From prestamos ', req.params.id,  (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los prestamos');

    }else {
        res.json(filas);
    }
});




//iniciar el servidor
app.listen (port, ()  => {
console.log(`sever running on port ${port}`);
});