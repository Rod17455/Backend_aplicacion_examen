const colaboradorController = require('../controllers/colaboradorControllers');

module.exports = (app) => {
    app.post('/api/colaborador/create', colaboradorController.register);
    app.put('/api/colaborador/update', colaboradorController.updateColaborador);
    app.get('/api/colaborador/all', colaboradorController.all);
    app.get('/api/colaborador/filtro', colaboradorController.filtro);
    app.delete('/api/colaborador/delete', colaboradorController.deleteColaborador)
}