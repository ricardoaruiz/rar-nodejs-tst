module.exports = function(app) {

    var connectionFactory = app.infra.ConnectionFactory();

    return function() {
        return {

            // método de negócio para listar os livros
            listar : function() {
                var connection = connectionFactory.getConnection();
                var livroDAO = new app.dao.LivroDAO(connection);

                return new Promise(function(resolve, reject) {
                    livroDAO.listar()
                    .then(function(result) {
                        resolve(result);
                    }).catch(function(err) {
                        reject(err);
                    });
                    connection.end();
                });
            },

            // método de negócio para inserir um livro
            inserir : function(livro) {
                var connection = connectionFactory.getConnection();
                var livroDAO = new app.dao.LivroDAO(connection);

                return new Promise(function(resolve, reject) {
                    livroDAO.inserir(livro)
                    .then(function(result) {
                        resolve(result);
                    })
                    .catch(function(err) {
                        reject(err);
                    });
                    connection.end(); 
                });
            }

        };
    };
};