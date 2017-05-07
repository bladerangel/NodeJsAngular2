'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/hello/:name?', (req, res) => {
    const name = req.params.name || 'not found';
    res.status(200).send({
        data: [1, 2, 3],
        text: `Hello Word ${name}!`
    })
});

module.exports = app;