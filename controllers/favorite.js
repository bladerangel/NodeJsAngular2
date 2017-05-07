'use strict';

function hello(req, res) {
    const name = req.params.name || 'not found';
    res.status(200).send({
        data: [1, 2, 3],
        text: `Hello Word ${name}!`
    })
}

module.exports = {
    hello
};
