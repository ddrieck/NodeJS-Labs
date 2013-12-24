
/*
 * GET home page.
 */
var config = {};
config.database = {
  uri: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/bookdb'
};
  
config.errors = {
  database_error: {
    code: 500,
    type: 'database_error',
    message: 'Sorry, something funky is happening with the database.'
  },
  server_error: {
    code: 500,
    type: 'server_error',
    message: 'Oops. Our server has a stomach ache.'
  },
  invalid_request: {
    code: 400,
    type: 'invalid_request',
    message: 'The request was missing a parameter or otherwise malformed.'
  },
  resource_not_found: {
    code: 400,
    type: 'resource_not_found',
    message: 'The requested resource was not found.'
  }
}
 
module.exports = config;
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

module.exports = function(app) {
  var BookController = app.controllers.BookController;
  
  app.get('/', function(req, res) {
    res.redirect('/books');
  });
  
  app.get('/books', BookController.list);
}
