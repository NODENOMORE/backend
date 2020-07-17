CREATE DATABASE words_db;
USE words_db;

CREATE TABLE mywords(
  `id` INTEGER(10) AUTO_INCREMENT,
  `word` VARCHAR(60) NOT NULL,
  `definition` VARCHAR(500) NOT NULL,
  `favorite` BOOLEAN NOT NULL DEFAULT 0,
  `category` VARCHAR(30) NOT NULL,
  `notes` VARCHAR(500),
  PRIMARY KEY (id)
  )

INSERT INTO mywords (word, definition, favorite, category, notes)
VALUES ("test", "this is only a test", 1, "test", "these are my notes")

INSERT INTO mywords (word, definition, favorite, category, notes)
VALUES ("test2", "this is a second test", 0, "test", "here are some lame notes")

INSERT INTO mywords (word, definition, favorite, category, notes)
VALUES ("mason", "a builder and worker in stone", 0, "Word of the Day", "Origin: Middle English from Old French masson (noun), maçonner (verb), probably of Germanic origin; perhaps related to make.")

INSERT INTO mywords (word, definition, favorite, category, notes)
VALUES ("cobra", "A highly venomous snake native to Africa and Asia that spreads the skin of its neck into a hood when disturbed.", 0, "Word of the Day", "Origin: Mid 17th century from Portuguese cobra de capello, literally ‘snake with hood’, based on Latin colubra ‘snake’.")

INSERT INTO mywords (word, definition, favorite, category, notes)
VALUES ("canoe", "A narrow, keelless boat with pointed ends, propelled by a paddle or paddles.", 0, "Word of the Day", "Origin: Mid 16th century from Spanish canoa, from Arawak, from Carib canaoua.")

INSERT INTO mywords (word, definition, favorite, category, notes)
VALUES ("pulpit", "A raised platform or lectern in a church or chapel from which the preacher delivers a sermon.", 0, "Word of the Day", "Origin: Middle English from Latin pulpitum ‘scaffold, platform’, in medieval Latin ‘pulpit’.")

INSERT INTO mywords (word, definition, favorite, category, notes)
VALUES ("mulberry", "A small deciduous tree with broad leaves, native to East Asia and long cultivated elsewhere.", 0, "Word of the Day", "Origin: Old English mōrberie, from Latin morum+ berry; related to Dutch moerbezie and German Maulbeere.")