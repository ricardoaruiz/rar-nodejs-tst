var express = require('./config/express');
var app = express();

var contatos = [
    {
        nome : 'Ricardo',
        idade : 38
    },
    {
        nome : 'Cinthya',
        idade : 36
    },
    {
        nome : 'Guilherme',
        idade : 8
    }
];

app.get('/contatos', function(req, res) {
    res.json(contatos);
});

var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Servidor no ar na porta ' + port);
});