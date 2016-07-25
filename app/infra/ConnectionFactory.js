var mysql = require('mysql');

var connection = function() {
    return mysql.createConnection({
        user : 'root',
        password: 'root',
        host : 'localhost',
        database : 'casadocodigo'
    });
};

module.exports = function() {
    return connection;
}