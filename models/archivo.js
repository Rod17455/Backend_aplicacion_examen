const db = require('../config/config');
const File = {};

//CREAR
File.create = (file, result) => {
    const sql = `
        INSERT INTO
            archivo(
                nombre_archivo,
                extension,
                fecha_creacion
            )
        VALUES(?, ?, ?);
    `;
    db.query
    (
        sql,
        [
            file.nombre_archivo,
            file.extension,
            file.fecha_creacion
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id del nuevo archivo:', res.insertId);
                result(null, res.insertId);
            }
        }
    )
}

//MOSTRAR
File.all = (result) => {

    const sql = `
    SELECT
        CONVERT(id_archivo, char) AS id_archivo,
        nombre_archivo,
        extension,
        fecha_creacion
    FROM
        archivo
    `;

    db.query(
        sql,
        (err, data) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                //console.log('Colaborador obtenido:', user);
                result(null, data);
            }
        }
    )

}

module.exports = File;