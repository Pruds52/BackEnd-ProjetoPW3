import express from "express";
import service from "../services/usuarioService.js";

const routes = express.Router();

routes.post("/", async (req, res) => {
  const { nome, email, senha, dataNascimento } = req.body;

  if (nome == null) {
    res.status(400).send({ message: "Digite um nome de usuário." });
  }

  if (email == null) {
    res.status(400).send({ message: "Digite um email." });
  }

  if (senha == null) {
    res.status(400).send({ message: "Digite uma senha." });
  }

  if (dataNascimento == null) {
    res.status(400).send({ message: "Digite uma data de nascimento." });
  }

  await service.cadastrarUsuario(nome, email, senha, dataNascimento);

  res.status(201).send({ message: "Usuário cadastrado com sucesso." });
});

routes.get("/", async (req, res) => {
  const [usuarioLista] = await service.getAll();
  console.log(usuarioLista)
  if (usuarioLista.length == 0) {
    res.status(204).send({ message: "Nenhum usuário encontrado." });
  }

  res.status(200).send(usuarioLista);
});

export default routes