const express = require ('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const config = require ('./config');

const app = express();


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


app.get ('/autores/:nombre/nacionalidad', (req, res) => {

config.query('select * From actividades', req.params.id,  (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los miembro');

    }else {
        res.json(filas);
    }
});
}
)

app.post('/biblioteca', (req, res) => {
  
    const data = req.body;
    console.log(data);

    config.query('INSERT INTO autores SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al guardar el proyecto');
        } else {
           
            res.json({
                id: result.insertId,
                ...data
            });
        }
    });
});


//iniciar el servidor
app.listen (port, ()  => {
console.log(`sever running on port ${port}`);
});