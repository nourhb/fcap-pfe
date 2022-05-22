-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 20 mai 2022 à 14:26
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `id` int NOT NULL AUTO_INCREMENT,
  `taskid` varchar(8) NOT NULL,
  `dep` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `instruction` varchar(200) NOT NULL,
  `duration` int NOT NULL,
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date_frame` date NOT NULL DEFAULT (curdate()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `taskid` (`taskid`),
  KEY `department` (`dep`)
) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `task`
--

INSERT INTO `task` (`id`, `taskid`, `dep`, `title`, `instruction`, `duration`, `type`, `status`, `date_frame`) VALUES
(201, 'D-ta4', 1, 'task1', 'task1', 5, 'Daily', 'enable', '2022-05-20'),
(202, 'D-ta2', 1, 'task2', 'task2', 1, 'Daily', 'enable', '2022-05-20'),
(203, 'D-ta10', 1, 'task3', 'task3', 1, 'Daily', '', '2022-05-20'),
(206, 'D-da10', 1, 'daily task4 ', 'daily task4', 4, 'Daily', 'enable', '2022-05-20'),
(208, 'D-da51', 1, 'daily task5', 'daily task5', 5, 'Daily', 'enable', '2022-05-20'),
(209, 'D-ta7', 1, 'task 7', 'task7 ', 7, 'Daily', 'enable', '2022-05-20'),
(210, 'D-ta21', 1, 'task 6', 'task 6', 6, 'Daily', 'enable', '2022-05-20'),
(211, 'W-w 67', 1, 'w task1', 'w task1', 11, 'Weekly', 'enable', '2022-05-15'),
(214, 'W-w 44', 1, 'w task2 ', 'w task2', 2, 'Weekly', 'enable', '2022-05-16'),
(215, 'W-w 36', 1, 'w task3', 'w task3', 3, 'Weekly', 'enable', '2022-05-17'),
(216, 'W-w 82', 1, 'w task 4', 'w task 4', 4, 'Weekly', 'enable', '2022-05-18'),
(217, 'W-w 64', 1, 'w task 5', 'w task 5', 5, 'Weekly', 'enable', '2022-05-19'),
(218, 'W-w 11', 1, 'w task 6', 'w task 6', 6, 'Weekly', 'enable', '2022-05-20'),
(219, 'W-w 45', 1, 'w task 7', 'w task 7', 7, 'Weekly', 'enable', '2022-05-21'),
(220, 'W-w 59', 1, 'w task 8', 'w task 8', 8, 'Weekly', 'enable', '2022-05-15'),
(221, 'M-m 27', 1, 'm task 1', 'm task 1', 1, 'Monthly', 'enable', '2022-05-01'),
(222, 'M-m 87', 1, 'm task 2', 'm task 2', 2, 'Monthly', 'enable', '2022-05-02'),
(223, 'M-m 82', 1, 'm task 3', 'm task 3', 3, 'Monthly', 'enable', '2022-05-03'),
(225, 'I-i 12', 1, 'i task 1', 'i task 1', 1, 'Instant', 'enable', '2022-05-16');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
