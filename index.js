'use strict';

let app = require('./app');
let port = process.env.PORT || 3678;

app.listen(3678, () => {
    console.log(`Api rest work in http://localhost:${port}`);
});
