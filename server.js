const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

// IMPORTAR RUTAS

const userRoutes = require('./routes/userRoutes');
const colaboradorRoutes = require('./routes/colaboradorRoutes');
const archivoRoutes = require('./routes/archivoRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

userRoutes(app);
colaboradorRoutes(app);
archivoRoutes(app);

//IP DE EJEMPLO
server.listen(3000, '0.0.0.0' || 'localhost' ,function(){
    console.log('Aplicacion de NodeJs '+ port + ' Iniciada .....')
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

//Eror HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server
}