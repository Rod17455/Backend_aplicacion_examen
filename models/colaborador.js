const db = require('../config/config');
const Colaborador = {};

//CREAR
Colaborador.create = (colaborador, result) => {
    const sql = `
        INSERT INTO
            colaborador(
                nombre,
                correo,
                rfc,
                domicilio_fiscal,
                curp,
                num_seg_social,
                fecha_inicio_laboral,
                tipo_contrato,
                departamento,
                puesto,
                salario_diario,
                salario,
                estado
            )
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query
    (
        sql,
        [
            colaborador.nombre,
            colaborador.correo,
            colaborador.rfc,
            colaborador.domicilio_fiscal,
            colaborador.curp,
            colaborador.num_seg_social,
            colaborador.fecha_inicio_laboral,
            colaborador.tipo_contrato ,
            colaborador.departamento ,
            colaborador.puesto ,
            colaborador.salario_diario ,
            colaborador.salario ,
            colaborador.estado
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id del nuevo usuario:', res.insertId);
                result(null, res.insertId);
            }
        }
    )
}

Colaborador.findById = (id, result) => {

    const sql = `
    SELECT
        CONVERT(id_colaborador, char) AS id_colaborador,
        nombre,
        correo,
        rfc,
        domicilio_fiscal,
        curp,
        num_seg_social,
        fecha_inicio_laboral,
        tipo_contrato,
        departamento,
        puesto,
        salario_diario,
        salario,
        estado
    FROM
        colaborador
    WHERE
        id_colaborador = ?
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

//MOSTRAR CON FILTROS
Colaborador.all = (result) => {

    const sql = `
    SELECT
        CONVERT(id_colaborador, char) AS id_colaborador,
        nombre,
        correo,
        rfc,
        domicilio_fiscal,
        curp,
        num_seg_social,
        fecha_inicio_laboral,
        tipo_contrato,
        departamento,
        puesto,
        salario_diario,
        salario,
        estado
    FROM
        colaborador
    `;

    db.query(
        sql,
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                //console.log('Colaborador obtenido:', user);
                result(null, user);
            }
        }
    )

}

Colaborador.filtro = (data,result) => {

    const sql = `
    SELECT
        CONVERT(id_colaborador, char) AS id_colaborador,
        nombre,
        correo,
        rfc,
        domicilio_fiscal,
        curp,
        num_seg_social,
        fecha_inicio_laboral,
        tipo_contrato,
        departamento,
        puesto,
        salario_diario,
        salario,
        estado
    FROM
        colaborador
    WHERE
        rfc like ? AND
        curp like ? AND
        nombre like ?
    `;

    db.query(
        sql,
        [
            `%${data.rfc}`,
            `%${data.curp}`,
            `%${data.nombre}`

        ],
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                //console.log('Colaborador obtenido:', user);
                result(null, user[0]);
            }
        }
    )

}

//EDITAR
Colaborador.update = (colaborador, result) => {

    const sql = `
    UPDATE
        colaborador
    SET
        nombre = ?,
        correo = ?,
        rfc = ?,
        domicilio_fiscal = ?,
        curp = ?,
        num_seg_social = ?,
        fecha_inicio_laboral = ?,
        tipo_contrato = ?,
        departamento = ?,
        puesto = ?,
        salario_diario = ?,
        salario = ?,
        estado = ?
    WHERE
        id_colaborador = ?
    `;

    db.query
    (
        sql,
        [
            colaborador.nombre,
            colaborador.correo,
            colaborador.rfc,
            colaborador.domicilio_fiscal,
            colaborador.curp,
            colaborador.num_seg_social,
            colaborador.fecha_inicio_laboral,
            colaborador.tipo_contrato ,
            colaborador.departamento ,
            colaborador.puesto ,
            colaborador.salario_diario ,
            colaborador.salario,
            colaborador.estado,
            colaborador.id_colaborador
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Colaborador actualizado:', colaborador.id_colaborador);
                result(null, colaborador.id_colaborador);
            }
        }
    )
}


//ELIMINAR
Colaborador.delete = (data, result) => {

    const sql = `
    DELETE FROM
        colaborador
    WHERE
        id_colaborador = ?
    `;

    db.query
    (
        sql,
        [
            data.id
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Colaborador eliminado');
                result(null, data.id);
            }
        }
    )
}

module.exports = Colaborador;