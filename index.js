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

app.get('/hello', function (req, res) {
    res.send({text: "Hello Word!"})
});
