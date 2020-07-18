const words = require('./controllers/words_controller')

exports.route = (app) => {

  //  app.get('/', function (req, res) {
  //   res.send('Hello, World!')
  // });

  app.post('/myword', words.create);

  app.get('/mywords', words.readAll);
  
  app.get('/mywords/:id', words.read);

  // app.get('/mywords/:id?', words.read);

  app.patch('/wordupdate/:id', words.update);

  app.delete('/removeword/:id', words.delete);
}
