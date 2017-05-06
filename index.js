'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = process.env.PORT || 3678;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(3678, function () {
    console.log(`Api rest work in http://localhost:${port}`);
});

app.get('/hello/:name?', function (req, res) {
    const name = req.params.name;
    res.status(200).send({
        data: [1, 2, 3],
        text: `Hello Word ${name}!`
    })
});
