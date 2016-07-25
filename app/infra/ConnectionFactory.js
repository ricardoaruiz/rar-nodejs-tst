var mysql = require('mysql');

var connection = function() {
    return {
        getConnection : function() {
            if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                return mysql.createConnection({
                    user : 'root',
                    password: 'root',
                    host : 'localhost',
                    database : 'casadocodigo'
                });
            }
            if(process.env.NODE_ENV === 'production') {
                return mysql.createConnection({
                    user : 'b397a60b706f3f',
                    password: '7bac1f42',
                    host : 'us-cdbr-iron-east-04.cleardb.net',
                    database : 'heroku_a65a5e2be8d7667'
                });
            }
        }
    };
};

module.exports = function() {
    return connection;
}