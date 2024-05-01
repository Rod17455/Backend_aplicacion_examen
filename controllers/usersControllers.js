const User = require('../models/usuario');

module.exports = {

    login(req, res) {

        const email = req.body.email;
        const password = req.body.password;

        User.findByEmail(email, async (err, myUser) => {
            
            console.log('Error ', err);

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            if (!myUser) {
                return res.status(401).json({ // EL CLIENTE NO TIENE AUTORIZACION PARTA REALIZAR ESTA PETICION (401)
                    success: false,
                    message: 'El email no fue encontrado'
                });
            }

            if(password == myUser.password){
                const data = {
                    id: `${myUser.id}`,
                    nombre: myUser.nombre,
                    email: myUser.email,
                    rfc: myUser.rfc
                }

                return res.status(200).json({
                    success: true,
                    message: 'El usuario fue autenticado',
                    data: data // EL ID DEL NUEVO USUARIO QUE SE REGISTRO
                });
            } else {
                return res.status(401).json({ // EL CLIENTE NO TIENE AUTORIZACION PARTA REALIZAR ESTA PETICION (401)
                    success: false,
                    message: 'El password es incorrecto'
                });
            }
            

        });

    },

    //REGISTRAR USUARIO
    register(req, res) {

        const user = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE
        User.create(user, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
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
        User.all((err,data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }
            
            return res.status(200).json(data);

        });
    },

    //ACTUALIZAR USUARIO
    updateUser(req, res){
        const user = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE

        User.update(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            User.findById(data, (err, myData) => {
                if (err) {
                    return res.status(501).json({
                        success: false,
                        message: 'Hubo un error con el registro del usuario',
                        error: err
                    });
                }

                return res.status(201).json({
                    success: true,
                    message: 'El usuario se actualizo correctamente',
                    data: myData
                });
            })


        });
    }
}