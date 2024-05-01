const db = require('../config/config');

const User = {};

//CREAR UN USUARIO
User.create = (user, result) => {

    const sql = `
        INSERT INTO
            usuario(
                nombre,
                email,
                rfc,
                password
            )
        VALUES(?, ?, ?, ?);
    `;

    db.query
    (
        sql,
        [
            user.nombre,
            user.email,
            user.rfc,
            user.password
        ],
        (err, res) => {
            if (err) {
                console.log('Nombre:'+user.nombre)
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Nombre:'+user.nombre)
                console.log('Id del nuevo usuario:', res.insertId);
                result(null, res.insertId);
            }
        }
    )

}

User.findByEmail = (email, result) => {

    const sql = `
    SELECT
        id,
        nombre,
        email,
        rfc,
        password
    FROM
        usuario
    WHERE
        email = ?
    `;

    db.query(
        sql,
        [email],
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Usuario obtenido:', user[0]);
                result(null, user[0]);
            }
        }
    )

}

//ENCONTRAR UN USUARIO
User.findById = (id, result) => {

    const sql = `
    SELECT
        CONVERT(id, char) AS id,
        nombre,
        email,
        rfc,
        password
    FROM
        usuario
    WHERE
        id = ?
    `;

    db.query(
        sql,
        [id],
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                result(null, user[0]);
            }
        }
    )

}

User.all = (result) => {

    const sql = `
    SELECT
        CONVERT(id, char) AS id,
        nombre,
        email,
        rfc,
        password
    FROM
        usuario
    `;

    db.query(
        sql,
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                result(null, user);
            }
        }
    )

}

User.update = (user, result) => {

    const sql = `
    UPDATE
        usuario
    SET
        nombre = ?,
        email = ?,
        rfc = ?,
        password = ?
    WHERE
        id = ?
    `;

    db.query
    (
        sql,
        [
            user.nombre,
            user.email,
            user.rfc,
            user.password,
            user.id
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Usuario actualizado:', user.id);
                result(null, user.id);
            }
        }
    )
}


module.exports = User;