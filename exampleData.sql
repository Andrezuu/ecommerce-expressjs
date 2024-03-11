
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `producto_nombre` varchar(50) DEFAULT NULL,
  `modelo` varchar(150) DEFAULT NULL,
  `caracteristicas` varchar(150) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `precio_cuotas` decimal(10,2) DEFAULT NULL,
  `descripcion` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `precio_envio` int DEFAULT '0',
  `imagen_ruta` varchar(255) DEFAULT 'imagenes/fotoPrueba.png',
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Laptop HP Gaming','Victus','Disco solido',213.00,12345.00,'lo describe','2024-03-10 02:51:24','2024-03-10 02:51:24',30,'imagenes/laptop.jpg'),(3,'Auto','Modelo 1','FOo',23.00,234.00,'bar','2024-03-10 03:08:49','2024-03-10 03:08:49',30,'imagenes/auto.jpg'),(4,'Tablet Apple','iPad Pro','256 GB',999.00,200.00,'Color rosa','2024-03-11 05:48:24','2024-03-11 05:48:24',30,'imagenes/tablet.jpg'),(5,'Camara Canon','EOS R5','Sensor de imagen de alta calida',3840.00,57.00,'tres lentillas ','2024-03-11 05:53:19','2024-03-11 05:53:19',30,'imagenes/camaraCanon.jpg'),(6,'Consola de videojuegos','X-BOX','Capacidad de almacenamiento',2500.00,75.00,'Viene con 3 juegos','2024-03-11 06:25:21','2024-03-11 06:25:21',30,'imagenes/xbox.jpg'),(7,'Ropa','Sudaderas','Algodon',125.00,25.00,'color: negro, rosa, plomo','2024-03-11 06:25:21','2024-03-11 06:25:21',20,'imagenes/ropa.jpg'),(8,'Funda laptop','The North Face','Material impermiable',70.00,10.00,'Varios compartimientos','2024-03-11 06:25:21','2024-03-11 06:25:21',15,'imagenes/Funda.jpg'),(9,'Cartera','The totebag ','Cuero',350.00,20.00,'Varios Compartimientos','2024-03-11 06:25:21','2024-03-11 06:25:21',20,'imagenes/cartera.jpg'),(10,'Cuadernos ','One','Hoja punteada ',27.00,27.00,'Tamaño carta u oficio','2024-03-11 06:25:21','2024-03-11 06:25:21',20,'imagenes/Cuaderno.jpg'),(11,'Toma todo','Stanley','Alta durabilidad',250.00,50.00,'Color blanco','2024-03-11 06:25:21','2024-03-11 06:25:21',15,'imagenes/Tomatodo.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `pais` decimal(10,2) DEFAULT NULL,
  `metodo_pago` decimal(10,2) DEFAULT NULL,
  `nro_compras` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'patito','12345',NULL,NULL,'a@a.com',NULL,NULL,NULL,'2024-03-11 01:57:27','2024-03-11 01:57:27');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'prueba'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-11  9:27:31
