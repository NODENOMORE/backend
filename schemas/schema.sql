CREATE DATABASE words_db;
USE words_db;
CREATE TABLE mywords(
  `id` INTEGER(10) AUTO_INCREMENT,
  `word` VARCHAR(30) NOT NULL,
  `definition` VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
  )
INSERT INTO mywords (word, definition)
VALUES ("test", "this is only a test")
