const archivoController = require('../controllers/archivoControllers');

module.exports = (app) => {
    app.post('/api/file/create', archivoController.register);
    app.get('/api/file/all', archivoController.all);
}