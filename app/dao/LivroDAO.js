var LivroDAO = function(connection) {
    _self = this;
    _self._connection = connection;
}

LivroDAO.prototype.listar = function() {
    return new Promise(function(resolve, reject){
        _self._connection.query('select * from livros', function(err, result) {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

LivroDAO.prototype.inserir = function(livro) {
    return new Promise(function(resolve, reject) {
        _self._connection.query('insert into livros (titulo, descricao, preco) values (?,?,?)',
            [livro.titulo, livro.descricao, livro.preco],
            function(err, result) {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
    });
}

module.exports = function() {
    return LivroDAO;
}