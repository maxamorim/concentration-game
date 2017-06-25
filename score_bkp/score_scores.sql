-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: score
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
INSERT INTO `scores` VALUES (1,'2','0:30','easy','23-06-2017'),(2,'2','0:35','easy','23-06-2017'),(3,'2','0:40','easy','23-06-2017'),(4,'4','0:30','normal','23-06-2017'),(5,'4','0:35','normal','23-06-2017'),(6,'4','0:40','normal','23-06-2017'),(7,'6','0:20','hard','23-06-2017'),(8,'6','0:15','hard','23-06-2017'),(9,'6','0:22','hard','23-06-2017'),(10,'2','0:50','easy','23-06-2017'),(11,'2','0:36','easy','2017-06-23 16:59:07.292'),(13,'2','0:59','easy','2017-06-24 17:02:50.256'),(14,'2','0:55','easy','2017-06-24 17:04:34.313'),(15,'4','0:57','normal','2017-06-24 17:34:42.831'),(16,'6','0:22','hard','2017-06-24 17:54:34.338'),(17,'2','0:56','easy','2017-06-24 20:19:16.845'),(18,'6','0:17','hard','2017-06-24 21:00:07.300'),(19,'6','0:12','hard','2017-06-24 21:00:35.338'),(20,'4','0:51','normal','2017-06-24 21:01:02.885'),(21,'2','0:57','easy','2017-06-24 21:01:11.260'),(22,'2','0:55','easy','2017-06-24 21:09:14.157'),(26,'2','0:58','easy','2017-06-24 21:33:36.958'),(27,'2','0:59','easy','2017-06-24 21:33:43.403'),(28,'2','0:58','easy','2017-06-24 21:33:51.132'),(29,'2','0:59','easy','2017-06-24 21:33:54.258'),(30,'6','0:18','hard','2017-06-24 22:22:50.317'),(31,'4','0:56','normal','2017-06-24 22:23:25.440'),(32,'2','0:59','easy','2017-06-24 22:23:36.097'),(34,'6','0:24','hard','2017-06-24 22:24:46.643'),(35,'4','0:51','normal','2017-06-24 23:50:04.987'),(36,'4','0:51','normal','2017-06-24 23:50:47.931'),(37,'4','0:47','normal','2017-06-24 23:52:28.156'),(38,'2','0:55','easy','2017-06-24 23:55:55.746'),(39,'6','0:22','hard','2017-06-25 00:00:33.334'),(40,'2','0:59','easy','2017-06-25 00:05:01.864'),(41,'4','0:56','normal','2017-06-25 00:05:11.955'),(42,'6','0:22','hard','2017-06-25 00:05:25.544'),(43,'2','0:59','easy','2017-06-25 00:16:22.149'),(44,'4','0:57','normal','2017-06-25 00:16:39.802'),(45,'6','0:22','hard','2017-06-25 00:17:09.478'),(46,'4','0:53','normal','2017-06-25 00:18:13.754'),(47,'4','0:57','normal','2017-06-25 00:18:28.426'),(48,'4','0:56','normal','2017-06-25 00:18:39.852'),(49,'4','0:54','normal','2017-06-25 00:18:51.179'),(50,'4','0:57','normal','2017-06-25 00:18:59.671'),(51,'4','0:58','normal','2017-06-25 00:19:08.800'),(52,'4','0:56','normal','2017-06-25 00:19:19.929'),(53,'4','0:52','normal','2017-06-25 00:19:32.874'),(54,'4','0:53','normal','2017-06-25 00:19:44.383'),(55,'4','0:56','normal','2017-06-25 00:19:53.712'),(56,'4','0:56','normal','2017-06-25 00:20:07.748'),(57,'4','0:53','normal','2017-06-25 00:20:23.914'),(58,'6','0:14','hard','2017-06-25 00:20:50.310'),(59,'6','0:17','hard','2017-06-25 00:21:10.799'),(60,'6','0:17','hard','2017-06-25 00:21:28.148'),(61,'6','0:16','hard','2017-06-25 00:21:49.005');
/*!40000 ALTER TABLE `scores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-25  0:42:06
