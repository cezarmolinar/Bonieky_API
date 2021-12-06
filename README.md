# Projeto Bonieky_API

##Base de dados
CREATE TABLE Phrases.phrases (
	id INT auto_increment NOT NULL,
	author varchar(100) NOT NULL,
	txt varchar(100) NOT NULL,
	CONSTRAINT phases_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;