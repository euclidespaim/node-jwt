const usuariosControlador = require('./usuarios-controlador');
const middlewaresAutenticacao = require('./middlewares-autenticacao');

module.exports = (app) => {
  app
    .route('/usuario/atualiza-token')
    .post(
      middlewaresAutenticacao.refresh, 
      usuariosControlador.login
    );

  app
    .route('/usuario/login')
    .post(
      middlewaresAutenticacao.local, 
      usuariosControlador.login
    );

  app
    .route('/usuario/logout')
    .get(
      middlewaresAutenticacao.bearer, 
      usuariosControlador.logout
    );

  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app
    .route('/usuario/verifica-email/:token')
    .get(
      middlewaresAutenticacao.verificacaoEmail,
      usuariosControlador.verificaEmail
    );

  app
    .route('/usuario/:id')
    .delete(
      middlewaresAutenticacao.bearer, 
      usuariosControlador.deleta
    );
};
