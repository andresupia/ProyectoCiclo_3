-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.9.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para gestion_biblioteca
CREATE DATABASE IF NOT EXISTS `gestion_biblioteca` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `gestion_biblioteca`;

-- Volcando estructura para tabla gestion_biblioteca.libro
CREATE TABLE IF NOT EXISTS `libro` (
  `idlibro_lbr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `titulo_lbr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `editorial_lbr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `nombre_lbr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `categoria_lbr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `disponible_lbr` tinyint(4) NOT NULL,
  `copiasdisp_lbr` int(11) DEFAULT NULL,
  PRIMARY KEY (`idlibro_lbr`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestion_biblioteca.libro: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `libro` DISABLE KEYS */;
INSERT INTO `libro` (`idlibro_lbr`, `titulo_lbr`, `editorial_lbr`, `nombre_lbr`, `categoria_lbr`, `disponible_lbr`, `copiasdisp_lbr`) VALUES
	('23185481', 'el señor de los anillos', NULL, NULL, NULL, 1, 5),
	('63218452', 'cien años de soledad', NULL, NULL, NULL, 1, 5);
/*!40000 ALTER TABLE `libro` ENABLE KEYS */;

-- Volcando estructura para tabla gestion_biblioteca.prestamo
CREATE TABLE IF NOT EXISTS `prestamo` (
  `fechaprestamo` datetime NOT NULL,
  `fechadevolucion` datetime NOT NULL,
  `fk_idcedula_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `fk_idlibro_lbr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`fechaprestamo`),
  KEY `FK_prestamo_usuario` (`fk_idcedula_usr`),
  KEY `FK_prestamo_libro` (`fk_idlibro_lbr`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestion_biblioteca.prestamo: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `prestamo` DISABLE KEYS */;
INSERT INTO `prestamo` (`fechaprestamo`, `fechadevolucion`, `fk_idcedula_usr`, `fk_idlibro_lbr`) VALUES
	('2022-09-15 11:19:23', '2022-09-25 11:19:25', '32158812', '63218452'),
	('2022-09-15 11:19:53', '2022-09-30 11:19:55', '43994218', '23185481');
/*!40000 ALTER TABLE `prestamo` ENABLE KEYS */;

-- Volcando estructura para tabla gestion_biblioteca.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `idcedula_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `alias_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `contrasena_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `nombre_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `apellido_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `correo_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `direccion_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `telefono_usr` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `tipo_usr` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`idcedula_usr`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestion_biblioteca.usuario: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`idcedula_usr`, `alias_usr`, `contrasena_usr`, `nombre_usr`, `apellido_usr`, `correo_usr`, `direccion_usr`, `telefono_usr`, `tipo_usr`) VALUES
	('32158812', 'rodul45', '0000', 'pepito', 'perez', 'perez@gmail.com', 'cr 44 15 12', '231858158', 'user'),
	('43994218', 'roaksndf', '1234', 'pepe', 'lopez', 'lopez@gmail.com', 'cr 42 12 12', '421851815', 'admin');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
