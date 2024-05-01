const File = require('../models/archivo');

module.exports = {
    register(req, res) {

        const file = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE
        File.create(file, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del colaborador',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: data // EL ID DEL NUEVO USUARIO QUE SE REGISTRO
            });

        });

    },

    all(req,res){
        
        File.all( (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar los archivos',
                    error: err
                });
            }

            return res.status(201).json(data);
        });
    },
}