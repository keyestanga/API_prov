const usersRouter = require('../users/users.router');
//const usersController = require('../users/users.controller');


function routerApi (app) {
  app.use('/', usersRouter);
  //app.get('/', usersController.getAllUsers);
  //app.post('/',usersController.addUser);
  //app.delete('/',usersController.deleteUser);


}

module.exports = routerApi;
