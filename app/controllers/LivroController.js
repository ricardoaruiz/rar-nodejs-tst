module.exports = function(app) {

    var livroService = app.services.LivroServices();

    // Endpoint para consulta de livros.
    app.get('/livros', function(req, res, next) {

        livroService.listar()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });       
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
            livroService.inserir(livro)
            .then(function(result) {
                res.status(201).send();
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
        }
    });

}