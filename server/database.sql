-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 22 mai 2022 à 09:34
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
-- Structure de la table `announcement`
--

DROP TABLE IF EXISTS `announcement`;
CREATE TABLE IF NOT EXISTS `announcement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(225) NOT NULL,
  `description` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `announcement`
--

INSERT INTO `announcement` (`id`, `title`, `description`) VALUES
(23, 'hola i am an announcement', 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii  i am an announcement from you or the other departments '),
(24, 'wiiiiiiiiii', 'hhhhhhhhhhhh'),
(25, 'wiiiiiiiiii', 'hhhhhhhhhhhh'),
(26, '', ''),
(27, '', ''),
(28, 'Wwwwwww', '111'),
(29, 'Why?', 'Tell me why tell me why ohohooh why we can live tougather'),
(30, 'Just for positif vibes', 'Don\'t be worry keep going do what U can and It will be Good \nU can do what others can\'t :) :*'),
(31, 'hi', 'hi'),
(32, '', ''),
(33, 'Perfect', 'No one is perfect but everyone has something is perfect with ...'),
(34, 'hi', 'hihihih'),
(35, 'Oh hi i\'m random task', 'hello'),
(36, '19', '19'),
(37, 'Hola', 'Boooooooo');

-- --------------------------------------------------------

--
-- Structure de la table `department`
--

DROP TABLE IF EXISTS `department`;
CREATE TABLE IF NOT EXISTS `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dep_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dep_name` (`dep_name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `department`
--

INSERT INTO `department` (`id`, `dep_name`) VALUES
(3, 'ACCOUNTING'),
(1, 'ADMIN'),
(4, 'CUSTOMER_SERVISES'),
(2, 'INFORMATION_TECHNOLOGIES'),
(5, 'MARKETING'),
(6, 'TECHNICHAL_SERVICES');

-- --------------------------------------------------------

--
-- Structure de la table `emparchive`
--

DROP TABLE IF EXISTS `emparchive`;
CREATE TABLE IF NOT EXISTS `emparchive` (
  `cin` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip` varchar(100) NOT NULL,
  `dep` int NOT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `initialid` varchar(6) NOT NULL,
  `roles` varchar(225) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dep` (`dep`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `cin` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip` varchar(100) NOT NULL,
  `dep` int NOT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `initialid` varchar(6) NOT NULL,
  `roles` varchar(225) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'hi',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cin` (`cin`),
  KEY `dep` (`dep`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `employees`
--

INSERT INTO `employees` (`cin`, `id`, `first_name`, `last_name`, `user_name`, `email`, `phone`, `city`, `zip`, `dep`, `password`, `initialid`, `roles`) VALUES
(11111111, 171, 'saoussen', 'ben chaabene', 'saoussen ben chaabene', 'saoussen@gmail.com', '0124598755', 'souse', '5190', 2, '$2a$10$g5Dlb5uozmifo./OGk7i6e0Rs46uBsCPsSY3W3rxue2M1nOkgxaJq', 'sb-7', 'INFORMATION_TECHNOLOGIES'),
(12345678, 172, 'sirine', 'zouari', 'sirine zouari', 'sirinezouari@gmail.com', '12345678', 'ousse', '4000', 3, '$2a$10$vjrMQKo7rAoDi0wn0nZSXeIH1A04viVRWuPsc8owKHSdKtZhfvrXu', 'sz-8', 'ACCOUNTING'),
(12868233, 192, 'Saoussen', 'Châabane', 'Saoussen Châabane', 'saoussen113@gmail.com', '+21628456262', 'Sousse', '4011', 1, '$2a$10$wOqlZK63wBzZ/tw6Jte2Fu2WBcMoM725yF/kW.B7tR0rmlLfSyQnS', 'SC-3', 'ADMIN'),
(11836030, 193, 'nour elhouda ', 'bouajila', 'nour elhouda  bouajila', 'nourhb58@gmail.com', '+21653724194', 'mahdia', '5190', 1, '$2a$10$TEK2CKd5wX.45va74U6No.IxSMzvgjHchKA.oOX273VhQLjaa8pBq', 'nb-9', 'ADMIN');

--
-- Déclencheurs `employees`
--
DROP TRIGGER IF EXISTS `before_employee_delete`;
DELIMITER $$
CREATE TRIGGER `before_employee_delete` BEFORE DELETE ON `employees` FOR EACH ROW BEGIN
    INSERT INTO emparchive(cin,id,first_name,last_name,user_name,email,phone,city,zip,dep,password,initialid,roles) VALUES(OLD.cin,OLD.id,OLD.first_name,OLD.last_name,OLD.user_name,OLD.email,OLD.phone,OLD.city,OLD.zip,OLD.dep,OLD.password,OLD.initialid,OLD.roles);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `history`
--

DROP TABLE IF EXISTS `history`;
CREATE TABLE IF NOT EXISTS `history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `operation` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `time` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `history`
--

INSERT INTO `history` (`id`, `operation`, `user`, `time`) VALUES
(1, 'Edit task', 'ADMIN', '21/05/2022, 15:42:35');

-- --------------------------------------------------------

--
-- Structure de la table `idea`
--

DROP TABLE IF EXISTS `idea`;
CREATE TABLE IF NOT EXISTS `idea` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idea` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `idea`
--

INSERT INTO `idea` (`id`, `idea`) VALUES
(1, 'wii'),
(2, 'Hi'),
(3, 'Hola'),
(4, 'Have a nice day'),
(6, 'U\'r so beautiful today!!'),
(7, 'Wish U all the best <33333'),
(8, 'Welcome Home!!');

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

DROP TABLE IF EXISTS `note`;
CREATE TABLE IF NOT EXISTS `note` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(225) DEFAULT NULL,
  `details` varchar(225) DEFAULT NULL,
  `created_at` date DEFAULT (now()),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `note`
--

INSERT INTO `note` (`id`, `title`, `details`, `created_at`) VALUES
(57, 'Weeeeeel', 'Heeeeyyyy', '2022-05-11');

--
-- Déclencheurs `note`
--
DROP TRIGGER IF EXISTS `before_notes_delete`;
DELIMITER $$
CREATE TRIGGER `before_notes_delete` BEFORE DELETE ON `note` FOR EACH ROW BEGIN
    INSERT INTO notearchive(id,title,details,created_at)
    VALUES(OLD.id,OLD.title,OLD.details,OLD.created_at);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `notearchive`
--

DROP TABLE IF EXISTS `notearchive`;
CREATE TABLE IF NOT EXISTS `notearchive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(225) DEFAULT NULL,
  `details` varchar(225) DEFAULT NULL,
  `created_at` date DEFAULT (now()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `notearchive`
--

INSERT INTO `notearchive` (`id`, `title`, `details`, `created_at`) VALUES
(1, 'wopa', 'wooiiiiiiiiiiiiiii', '2022-03-28'),
(2, 'mllll', 'Hhh', '2022-03-28'),
(3, '', '', '2022-04-05'),
(4, 'Oh', 'Hola', '2022-04-28'),
(5, 'Why', 'Why u\'r so beautifull', '2022-04-28'),
(6, 'Wwwwwww', 'hhhh', '2022-04-29'),
(7, '', '', '2022-04-29'),
(8, 'Wwwwwww', 'mmmmm', '2022-05-03'),
(9, '', '', '2022-05-04'),
(10, 'Oh hi i\'m random task', 'sss', '2022-05-06'),
(11, 'Hola', 'hi', '2022-05-11'),
(12, 'Hola', 'hiiii', '2022-05-11'),
(13, 'Hi', 'hi', '2022-05-11'),
(14, 'Hola', 'heeeee', '2022-05-11'),
(15, 'Hola', 'hi', '2022-05-11'),
(16, 'Hola', 'jjjjj', '2022-05-11'),
(17, 'Hola', 'hi', '2022-05-11'),
(18, 'Hola', 'hi', '2022-05-11'),
(19, 'Hola', 'hi', '2022-05-11'),
(20, 'Hola', 'heeee', '2022-05-11'),
(21, 'Hola', 'hey', '2022-05-11'),
(22, 'Hola', 'heeee', '2022-05-11'),
(23, 'Hi', 'hola', '2022-05-11'),
(24, 'Hello', 'Hello', '2022-05-11'),
(25, 'Hello', 'hi', '2022-05-11'),
(26, 'Hello', 'jjjj', '2022-05-11'),
(27, 'Hello', 'hola', '2022-05-11'),
(28, 'Hello', 'wooooo', '2022-05-11'),
(29, 'Hello', 'hhhh', '2022-05-11'),
(30, 'Hello', 'jjjj', '2022-05-11'),
(31, 'Wow', 'nice!', '2022-05-11'),
(32, 'Wow', 'kkkk', '2022-05-11'),
(33, 'Wow', 'mlkj', '2022-05-11'),
(34, 'Wow', 'hi', '2022-05-11'),
(35, 'Wow', 'mmmm', '2022-05-11'),
(36, 'Wow', 'hi', '2022-05-11'),
(37, 'Wow', 'ki', '2022-05-11'),
(38, 'Wow', 'hi', '2022-05-11'),
(39, 'Wow', 'hhhh', '2022-05-11'),
(40, 'Wow', 'hi', '2022-05-11'),
(41, 'Wow', 'mlhg', '2022-05-11'),
(42, 'Wow', 'llll', '2022-05-11'),
(43, 'Wow', 'wow', '2022-05-11'),
(44, 'Wow', 'mllll', '2022-05-11'),
(45, 'Wow', 'Hi', '2022-05-11'),
(46, 'Wow', 'hhhh', '2022-05-11'),
(47, 'Wow', 'hi', '2022-05-11'),
(48, 'Wow', 'Salut!', '2022-05-11'),
(49, 'Wow', 'hey', '2022-05-11'),
(50, 'Wow', 'hi', '2022-05-11'),
(51, 'Hey', 'Hey', '2022-05-11'),
(52, 'Hey', 'wtf!!', '2022-05-11'),
(53, 'Hey', 'you', '2022-05-11'),
(54, 'Hey', 'Ys', '2022-05-11'),
(55, '', '', '2022-05-11'),
(56, '', '', '2022-05-11'),
(58, '', '', '2022-05-11'),
(59, 'Hey', 'mmm', '2022-05-11'),
(60, '', '', '2022-05-11'),
(61, '', '', '2022-05-11');

-- --------------------------------------------------------

--
-- Structure de la table `selectedtask`
--

DROP TABLE IF EXISTS `selectedtask`;
CREATE TABLE IF NOT EXISTS `selectedtask` (
  `id` int NOT NULL AUTO_INCREMENT,
  `taskid` varchar(225) NOT NULL,
  `dep_id` int NOT NULL,
  `user_id` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `added_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int NOT NULL DEFAULT '0',
  `first_check` time DEFAULT NULL,
  `last_check` time DEFAULT NULL,
  `real_time` time DEFAULT NULL,
  `execution_duration` time DEFAULT NULL,
  `pause_duration` time DEFAULT NULL,
  `estimated_time` time DEFAULT NULL,
  `wasted_time` time DEFAULT NULL,
  `count` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `selectedtask`
--

INSERT INTO `selectedtask` (`id`, `taskid`, `dep_id`, `user_id`, `added_at`, `status`, `first_check`, `last_check`, `real_time`, `execution_duration`, `pause_duration`, `estimated_time`, `wasted_time`, `count`) VALUES
(60, 'D-ta4', 1, '11836030', '2022-05-22 01:52:03', 1, '01:52:03', '01:52:03', '01:48:10', '01:48:42', NULL, '00:00:05', NULL, 0),
(61, 'D-ta2', 1, '11836030', '2022-05-22 01:48:32', 3, NULL, '01:48:32', '01:48:32', '01:50:18', NULL, '00:00:01', NULL, NULL),
(62, 'D-da51', 1, '11836030', '2022-05-22 01:49:36', 3, NULL, '01:49:36', '01:49:36', '01:50:10', NULL, '00:00:05', NULL, NULL);

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
  `status` int NOT NULL DEFAULT '0',
  `date_frame` date NOT NULL DEFAULT (curdate()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `taskid` (`taskid`),
  KEY `department` (`dep`)
) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `task`
--

INSERT INTO `task` (`id`, `taskid`, `dep`, `title`, `instruction`, `duration`, `type`, `status`, `date_frame`) VALUES
(201, 'D-ta4', 1, 'task1', 'task1', 5, 'Daily', 1, '2022-05-22'),
(202, 'D-ta2', 1, 'task2', 'task2', 1, 'Daily', 1, '2022-05-22'),
(203, 'D-ta10', 1, 'task3', 'task3', 1, 'Daily', 0, '2022-05-22'),
(206, 'D-da10', 1, 'daily task4 ', 'daily task4', 4, 'Daily', 1, '2022-05-22'),
(208, 'D-da51', 1, 'daily task5', 'daily task5', 5, 'Daily', 1, '2022-05-22'),
(209, 'D-ta7', 1, 'task 7', 'task7 ', 7, 'Daily', 1, '2022-05-22'),
(210, 'D-ta21', 1, 'task 6', 'task 6', 6, 'Daily', 0, '2022-05-22'),
(211, 'W-w 67', 1, 'w task1', 'w task1', 11, 'Weekly', 0, '2022-05-22'),
(214, 'W-w 44', 1, 'w task2 ', 'w task2', 2, 'Weekly', 0, '2022-05-23'),
(215, 'W-w 36', 1, 'w task3', 'w task3', 3, 'Weekly', 0, '2022-05-24'),
(216, 'W-w 82', 1, 'w task 4', 'w task 4', 4, 'Weekly', 0, '2022-05-25'),
(217, 'W-w 64', 1, 'w task 5', 'w task 5', 5, 'Weekly', 0, '2022-05-26'),
(218, 'W-w 11', 1, 'w task 6', 'w task 6', 6, 'Weekly', 0, '2022-05-27'),
(219, 'W-w 45', 1, 'w task 7', 'w task 7', 7, 'Weekly', 0, '2022-05-28'),
(220, 'W-w 59', 1, 'w task 8', 'w task 8', 8, 'Weekly', 0, '2022-05-22'),
(221, 'M-m 27', 1, 'm task 1', 'm task 1', 1, 'Monthly', 0, '2022-05-01'),
(222, 'M-m 87', 1, 'm task 2', 'm task 2', 2, 'Monthly', 0, '2022-05-02'),
(223, 'M-m 82', 1, 'm task 3', 'm task 3', 3, 'Monthly', 0, '2022-05-03'),
(225, 'I-i 12', 1, 'i task 1', 'i task 1', 1, 'Instant', 0, '2022-05-16');

-- --------------------------------------------------------

--
-- Structure de la table `taskarchive`
--

DROP TABLE IF EXISTS `taskarchive`;
CREATE TABLE IF NOT EXISTS `taskarchive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dep` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `instruction` varchar(200) NOT NULL,
  `duration` int NOT NULL,
  `repeated` varchar(100) NOT NULL,
  `status` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date_frame` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `department` (`dep`)
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELIMITER $$
--
-- Évènements
--
DROP EVENT IF EXISTS `depname`$$
CREATE DEFINER=`root`@`localhost` EVENT `depname` ON SCHEDULE EVERY 1 SECOND STARTS '2022-04-07 10:56:13' ON COMPLETION NOT PRESERVE ENABLE DO update employees 
join   department 
on  employees.dep = department.id 
set employees.roles = department.dep_name 
where employees.dep = department.id$$

DROP EVENT IF EXISTS `monthly_date_frame_update`$$
CREATE DEFINER=`root`@`localhost` EVENT `monthly_date_frame_update` ON SCHEDULE EVERY 1 MONTH STARTS '2022-04-01 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE task
SET date_frame = ADDDATE(date_frame, INTERVAL 1 MONTH)  WHERE task.type="Monthly"$$

DROP EVENT IF EXISTS `weekly_date_frame_update`$$
CREATE DEFINER=`root`@`localhost` EVENT `weekly_date_frame_update` ON SCHEDULE EVERY 1 WEEK STARTS '2022-04-30 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE task
SET date_frame = DATE_ADD(date_frame , INTERVAL 7 DAY)
WHERE type='Weekly'$$

DROP EVENT IF EXISTS `daily_date_frame_update`$$
CREATE DEFINER=`root`@`localhost` EVENT `daily_date_frame_update` ON SCHEDULE EVERY 24 HOUR STARTS '2022-04-27 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE task SET date_frame = CURRENT_DATE() WHERE task.type="Daily"$$

DROP EVENT IF EXISTS `estimated_time`$$
CREATE DEFINER=`root`@`localhost` EVENT `estimated_time` ON SCHEDULE EVERY 1 SECOND STARTS '2022-05-19 22:59:01' ON COMPLETION NOT PRESERVE ENABLE DO update selectedtask 
join   task 
on  selectedtask.taskid = task.taskid 
set selectedtask.estimated_time= task.duration 
where selectedtask.taskid = task.taskid$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
