module.exports = function(app) {

    // Endpoint para consulta de livros.
    app.get('/livros', function(req, res, next) {

        var connection = app.infra.ConnectionFactory();

        connection.query('select * from livros', function(err, result) {
            if(!err) {
                res.json(result);
            } else {
                res.json(err);
            }
        });

        connection.end();

    });

    // Endpoint para cadastrar um livro
    app.post('/livros', function(req, res, next) {

        var livro = req.body;

        req.assert('titulo', 'O título é obrigatório').notEmpty();
        req.assert('descricao', 'A descrição é obrigatória').notEmpty();
        req.assert('preco', 'O preço é obrigatório').notEmpty();
        req.assert('preco', 'Preço inválido').isFloat();

        var errors = req.validationErrors();

        if(errors) {
            res.status(400).json(errors);
        } else {

            var connection = app.infra.ConnectionFactory();

            connection.query('insert into livros (titulo, descricao, preco) values(?,?,?)', 
                [livro.titulo, livro.descricao, livro.preco],
                function(err, result) {
                    if(!err) {
                        res.status(201).send();
                    } else {
                        res.status(500).json(err);
                    }
            });
            connection.end();
        }
    });

}