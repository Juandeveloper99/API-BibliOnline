//crear un servidor con express
const express = require ('express');

//incliur el cors
const cors = require('cors');

//incluir la body-parcer (para procesar peticiones post)
const bodyParser = require('body-parser');

//incluir la conexcion mysql
const config = require ('./config');

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

//crear una ruta para obtener todos los proyectos
app.get ('/autores', (req, res) => {
    //realiza la ruta
config.query('select * From biblioteca_app', (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los autores');

    }else {
        res.json(filas);
    }

});
}
)

app.post('/autores', (req, res) => {
    // Get the data from the request
    const data = req.body;
    console.log(data);

    // Perform the query
    config.query('INSERT INTO autores SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al guardar el autores');
        } else {
            // Return the response
            res.json({
                id: result.insertId,
                ...data
            });
        }
    });
});

app.get ('/libros', (req, res) => {
    //realiza la ruta
config.query('select * From biblioteca_app ', (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los biblioteca_app');

    }else {
        res.json(filas);
    }

});
}
)

app.post('/libros', (req, res) => {
    // Get the data from the request
    const data = req.body;
    console.log(data);

    // Perform the query
    config.query('INSERT INTO libros SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al guardar el libros');
        } else {
            // Return the response
            res.json({
                id: result.insertId,
                ...data
            });
        }
    });
});


app.get ('/genero', (req, res) => {
    //realiza la ruta
config.query('select * From biblioteca_app ', (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los generos ');

    }else {
        res.json(filas);
    }

});
}
)

app.post('/genero', (req, res) => {
    // Get the data from the request
    const data = req.body;
    console.log(data);

    // Perform the query
    config.query('INSERT INTO genero SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al guardar el genero ');
        } else {
            // Return the response
            res.json({
                id: result.insertId,
                ...data
            });
        }
    });
});

app.get ('/usuarios', (req, res) => {
    //realiza la ruta
config.query('select * From biblioteca_app', (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los usuarios ');

    }else {
        res.json(filas);
    }

});
}
)

app.post('/usuarios', (req, res) => {
    // Get the data from the request
    const data = req.body;
    console.log(data);

    // Perform the query
    config.query('INSERT INTO usuarios SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al guardar el usuario');
        } else {
            // Return the response
            res.json({
                id: result.insertId,
                ...data
            });
        }
    });
});


app.get ('/cantidad', (req, res) => {
    //realiza la ruta
config.query('select * From biblioteca_app ', (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener las cantidades ');

    }else {
        res.json(filas);
    }

});
}
)

app.post('/cantidad', (req, res) => {
    // Get the data from the request
    const data = req.body;
    console.log(data);

    // Perform the query
    config.query('INSERT INTO cantidad SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al guardar la cantidad');
        } else {
            // Return the response
            res.json({
                id: result.insertId,
                ...data
            });
        }
    });
});


app.get ('/prestamos', (req, res) => {
    //realiza la ruta
config.query('select * From biblioteca_app', (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los prestamos ');

    }else {
        res.json(filas);
    }

});
}
)

app.post('/prestamos', (req, res) => {
    // Get the data from the request
    const data = req.body;
    console.log(data);

    // Perform the query
    config.query('INSERT INTO prestamos SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al guardar el proyecto');
        } else {
            // Return the response
            res.json({
                id: result.insertId,
                ...data
            });
        }
    });
});




//Store a project in the database




app.get ('/biblioteca_app/:id_libro', (req, res) => {
    //realiza la ruta
config.query('select * From acutores where id_libro = ?', req.params.id,  (err, filas) => {
    if (err){
        console.log(err);
        res.status(500).send('Error al obtener los libros');

    }else {
        res.json(filas);
    }
});
}
)

//Store a project in the database
app.post('/Biblioteca_proyecto', (req, res) => {
    // Get the data from the request
    const data = req.body;
    console.log(data);

     // Perform the query
     config.query('INSERT INTO biblioteca_app SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al guardar en la biblioteca');
        } else {
            // Return the response
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