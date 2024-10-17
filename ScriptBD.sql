CREATE DATABASE Bolt;
USE Bolt;

CREATE TABLE Usuario(
	UsuarioId INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(45) NOT NULL,
    Email VARCHAR(45) NOT NULL,
    Senha VARCHAR(45) NOT NULL,
    DataInclusao DATETIME DEFAULT NOW() NOT NULL
);

CREATE TABLE Genero(
	GeneroId INT PRIMARY KEY AUTO_INCREMENT,
    GeneroNome VARCHAR(45) NOT NULL,
    DataInclusao DATETIME DEFAULT NOW() NOT NULL 
);

CREATE TABLE Jogo(
	JogoId INT PRIMARY KEY AUTO_INCREMENT,
    JogoNome VARCHAR(45) NOT NULL,
    GeneroId INT NOT NULL,
    Desenvolvedora VARCHAR(45) NOT NULL,
    Valor DECIMAL(6, 2) NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    DataInclusao DATETIME DEFAULT NOW() NOT NULL,
    
    CONSTRAINT FK_Jogo_Genero FOREIGN KEY (GeneroId) REFERENCES Genero(GeneroId)
);

CREATE TABLE ListaDesejo (
	ListaDesejoId INT PRIMARY KEY AUTO_INCREMENT,
    Usuarioid INT NOT NULL,
    JogoId INT NOT NULL,
    DataInclusao DATETIME DEFAULT NOW() NOT NULL,
    
    CONSTRAINT FK_ListaDesejo_Usuario FOREIGN KEY (UsuarioId) REFERENCES Usuario(UsuarioId),
    CONSTRAINT FK_ListaDesejo_Jogo FOREIGN KEY (JogoId) REFERENCES Jogo(JogoId)
);

CREATE TABLE HistoricoCompra (
	HistoricoCompraId INT PRIMARY KEY AUTO_INCREMENT,
    JogoId INT NOT NULL,
    UsuarioId INT NOT NULL,
    DataInclusao DATETIME DEFAULT NOW() NOT NULL,
    
    CONSTRAINT FK_HistoricoCompra_Jogo FOREIGN KEY (JogoId) REFERENCES Jogo(JogoId),
    CONSTRAINT FK_HistoricoCompra_Usuario FOREIGN KEY (UsuarioId) REFERENCES Usuario(UsuarioId)
);



    