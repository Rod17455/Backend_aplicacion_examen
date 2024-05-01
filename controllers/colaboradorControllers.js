const Colaborador = require('../models/colaborador');

module.exports = {
    register(req, res) {

        const colaborador = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE
        Colaborador.create(colaborador, (err, data) => {

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
        //const colaborador = req.body; 
        Colaborador.all( (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar los colaboradores',
                    error: err
                });
            }

            return res.status(201).json(data);
        });
    },

    filtro(req,res){
        const colaborador = req.body; 

        Colaborador.filtro(colaborador,(err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar los colaboradores',
                    error: err
                });
            }

            return res.status(201).json(data);
        });
    },

    updateColaborador(req, res){
        const colaborador = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE

        Colaborador.update(colaborador, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del colaborador',
                    error: err
                });
            }

            Colaborador.findById(data, (err, myData) => {
                if (err) {
                    return res.status(501).json({
                        success: false,
                        message: 'Hubo un error con el registro del colaborador',
                        error: err
                    });
                }

                return res.status(200).json({
                    success: true,
                    message: 'El colaborador se actualizo correctamente',
                    data: myData
                });
            })


        });
    },

    deleteColaborador(req, res){
        const id = req.body;

        Colaborador.delete(id, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del colaborador',
                    error: err
                });
            }

            return res.status(200).json({
                success: true,
                message: 'El colaborador se elimino correctamente'
            });


        });
    }




}