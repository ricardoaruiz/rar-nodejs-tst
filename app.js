var express = require('./config/express');
var app = express();

var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Servidor no ar na porta ' + port);
});