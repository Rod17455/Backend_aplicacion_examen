const usersController = require('../controllers/usersControllers');

module.exports = (app) => {

    app.post('/api/users/create', usersController.register);
    app.put('/api/users/update', usersController.updateUser);
    app.post('/api/users/login', usersController.login);
    app.get('/api/users/all', usersController.all);

}