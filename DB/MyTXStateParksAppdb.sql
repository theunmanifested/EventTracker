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
-- Table `park`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `park` ;

CREATE TABLE IF NOT EXISTS `park` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
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
-- Data for table `park`
-- -----------------------------------------------------
START TRANSACTION;
USE `MyTXStateParksAppdb`;
INSERT INTO `park` (`id`, `name`) VALUES (1, 'Longhorn Cavern State Park');

COMMIT;

