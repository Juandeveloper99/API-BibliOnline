const config = require('./config');
const { app } = require('.');

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
