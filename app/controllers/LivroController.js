module.exports = function(app) {

    var livros = [
        {
            titulo : 'Livro 1',
            numeroPaginas : 38
        },
        {
            titulo : 'Livro 2',
            numeroPaginas : 108
        },
        {
            titulo : 'Livro 3',
            numeroPaginas : 223
        }        
    ];

    // Endpoint para consulta de livros.
    app.get('/livros', function(req, res, next) {
        res.json(livros);
    });

}