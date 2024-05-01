use examen_flutter;

CREATE TABLE usuario(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    rfc VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) not null
);

CREATE TABLE archivo(
	id_archivo BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre_archivo VARCHAR(100) NOT NULL,
    extension VARCHAR(100) NOT NULL UNIQUE,
    fecha_creacion date NOT NULL
);

CREATE TABLE colaborador (
  id_colaborador BIGINT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  rfc VARCHAR(13) NOT NULL UNIQUE,
  domicilio_fiscal VARCHAR(150) NOT NULL,
  curp VARCHAR(18) NOT NULL UNIQUE,
  num_seg_social VARCHAR(11) NOT NULL UNIQUE,
  fecha_inicio_laboral DATE NOT NULL,
  tipo_contrato VARCHAR(50) NOT NULL,
  departamento VARCHAR(50) NOT NULL,
  puesto VARCHAR(50) NOT NULL,
  salario_diario DECIMAL(10,2) NOT NULL,
  salario DECIMAL(10,2) NOT NULL,
  estado varchar(30) NOT NULL
);