-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MyTXStateParksAppdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `MyTXStateParksAppdb` ;

-- -----------------------------------------------------
-- Schema MyTXStateParksAppdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MyTXStateParksAppdb` DEFAULT CHARACTER SET utf8 ;
USE `MyTXStateParksAppdb` ;

-- -----------------------------------------------------
-- Table `park_visit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `park_visit` ;

CREATE TABLE IF NOT EXISTS `park_visit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `park_name` VARCHAR(100) NULL,
  `active` TINYINT NULL DEFAULT 1,
  `length` TIME NULL,
  `date` DATETIME NULL,
  `main_activity` VARCHAR(100) NULL,
  `log_visit` TEXT NULL,
  `city` VARCHAR(45) NULL,
  `county` VARCHAR(45) NULL,
  `water_activity` TINYINT NULL,
  `first_time_visit` TINYINT NULL,
  `img_url` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS parkEnthu@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'parkEnthu'@'localhost' IDENTIFIED BY 'parkEnthu';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'parkEnthu'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `park_visit`
-- -----------------------------------------------------
START TRANSACTION;
USE `MyTXStateParksAppdb`;
INSERT INTO `park_visit` (`id`, `park_name`, `active`, `length`, `date`, `main_activity`, `log_visit`, `city`, `county`, `water_activity`, `first_time_visit`, `img_url`) VALUES (1, 'Longhorn Cavern State Park', 1, NULL, NULL, 'Cavern Walking Tour', 'Cavern walking tour was amazing! Took the whole family spontaneously, and we loved the cave so much. There was a lot of underground geology wonders, history, and bats. ', 'Burnet', 'Burnet', 0, 1, 'https://tpwd.texas.gov/state-parks/longhorn-cavern/gallery/longhorn-caverns_1.jpg');

COMMIT;

