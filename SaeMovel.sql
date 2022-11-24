CREATE DATABASE  IF NOT EXISTS `saemovel` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `saemovel`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: saemovel
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alocacao`
--

DROP TABLE IF EXISTS `alocacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alocacao` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `area` int NOT NULL,
  `quantidade` int NOT NULL,
  `automoveis_id` bigint DEFAULT NULL,
  `concessionarias_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7hcdqlbjwmwk1t5c9atl4aiuq` (`automoveis_id`),
  KEY `FK806ceg01d6mng4nh9wemli0bf` (`concessionarias_id`),
  CONSTRAINT `FK7hcdqlbjwmwk1t5c9atl4aiuq` FOREIGN KEY (`automoveis_id`) REFERENCES `automoveis` (`id`),
  CONSTRAINT `FK806ceg01d6mng4nh9wemli0bf` FOREIGN KEY (`concessionarias_id`) REFERENCES `concessionarias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alocacao`
--

LOCK TABLES `alocacao` WRITE;
/*!40000 ALTER TABLE `alocacao` DISABLE KEYS */;
INSERT INTO `alocacao` VALUES (1,1,8,1,1),(2,2,1,2,2),(3,4,4,3,3),(4,7,6,4,4),(5,8,4,5,5),(6,9,4,6,1),(7,10,1,7,2),(8,1,7,8,2),(9,2,2,9,3),(10,4,6,10,4),(11,7,3,11,5),(12,8,9,12,1),(13,9,9,13,2),(14,10,6,14,3),(15,1,4,15,3),(16,2,1,16,4),(17,4,8,17,5),(18,7,4,18,1),(19,8,10,19,2),(20,9,10,20,3),(21,10,7,21,4),(22,1,3,22,4),(23,2,5,23,5),(24,4,4,24,1),(25,7,3,25,2),(26,8,3,26,3),(27,9,10,27,4),(28,10,4,28,5),(29,1,2,29,1),(30,2,3,30,2),(31,4,4,31,3),(32,7,2,32,4),(33,8,3,33,5),(34,9,4,34,1),(35,10,3,35,2),(36,1,2,36,3),(37,2,3,37,4),(38,4,3,38,5),(39,7,2,39,1),(40,8,1,40,2);
/*!40000 ALTER TABLE `alocacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `automoveis`
--

DROP TABLE IF EXISTS `automoveis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `automoveis` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `modelo` varchar(100) NOT NULL,
  `preco` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `automoveis`
--

LOCK TABLES `automoveis` WRITE;
/*!40000 ALTER TABLE `automoveis` DISABLE KEYS */;
INSERT INTO `automoveis` VALUES (1,'Fiat Strada',43115),(2,'Fiat Argo',47660),(3,'Fiat Mobi',32102),(4,'Jeep Compass',34950),(5,'Hyundai HB20',49302),(6,'Jeep Renegade',36661),(7,'Volkswagen T-Cross',38182),(8,'Fiat Toro',57733),(9,'Hyundai Creta',55998),(10,'Chevrolet S10',51035),(11,'Toyota Corolla Cross',34544),(12,'Toyota Hilux',53937),(13,'Toyota Corolla',55022),(14,'Volkswagen Gol',48253),(15,'Honda HR-V',53438),(16,'Renault Kwid',31810),(17,'Volkswagen Nivus',35104),(18,'Hyundai HB20S',31855),(19,'Ford Ranger',48927),(20,'Fiat Uno',38111),(21,'Fiat Cronos',36515),(22,'Citroën C4 Cactus',53654),(23,'Toyota Yaris Hatchback',55869),(24,'Volkswagen Voyage',30954),(25,'Honda Civic',30871),(26,'Volkswagen Saveiro',32306),(27,'Caoa Chery Tiggo 5x',30069),(28,'Volkswagen Virtus',40689),(29,'Fiat Grand Siena',33469),(30,'Caoa Chery Tiggo 8',48481),(31,'Chevrolet Tracker',30648),(32,'Peugeot 208',46934),(33,'Toyota SW4',54252),(34,'Nissan Frontier',32596),(35,'Honda WR-V',35139),(36,'Volkswagen Taos',47546),(37,'Mitsubishi L200',57049),(38,'Renault Oroch',48756),(39,'Toyota Yaris Sedan',43077),(40,'Renault Duster',52641);
/*!40000 ALTER TABLE `automoveis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Adalberto Martins da Silva'),(2,'Adan Roger Guimarães Dias'),(3,'Adão Walter Gomes de Sousa'),(4,'Adelson Fernandes Sena'),(5,'Ademir Augusto Simões'),(6,'Ademir Borges dos Santos'),(7,'Adilio José da Silva Santos'),(8,'Adriana Ferreira de Lima Teodoro'),(9,'Adriano Bezerra Apolinario'),(10,'Adriano Heleno Basso'),(11,'Adriano Lourenço do Rego'),(12,'Adriano Matos Santos'),(13,'Adriano Pires Caetano'),(14,'Adriano Prada de Campos'),(15,'Adriel Alberto dos Santos'),(16,'Agner Vinicius Marques de Camargo'),(17,'Agrinaldo Ferreira Soares'),(18,'Alan Jhonnes Banlian da Silva e Sá'),(19,'Alberto Ramos Rodrigues'),(20,'Alcides José Ramos'),(21,'Aldemir SantAna dos Santos'),(22,'Aleksandro Marcelo da Silva'),(23,'Alessandro Martins Silva'),(24,'Alessandro Sanches'),(25,'Alex dos Reis de Jesus'),(26,'Alex Ferreira Soares'),(27,'Alex Sandro Oliveira'),(28,'Alex Souza Farias'),(29,'Alexandra de Lima Silva'),(30,'Alexandre Clemente da Costa');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `concessionarias`
--

DROP TABLE IF EXISTS `concessionarias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concessionarias` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concessionarias`
--

LOCK TABLES `concessionarias` WRITE;
/*!40000 ALTER TABLE `concessionarias` DISABLE KEYS */;
INSERT INTO `concessionarias` VALUES (1,'Atena concessionária'),(2,'Demétir concessionária'),(3,'Hera concessionária'),(4,'Estia concessionária'),(5,'Perséfone concessionária');
/*!40000 ALTER TABLE `concessionarias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-24 11:14:50
