import express from "express";
import service from "../services/jogoService.js";

const routes = express.Router();

routes.post("/", async (req, res) => {
  const { jogoNome, generoId, desenvolvedora, descricao } = req.body;

  if (jogoNome == null) {
    res.status(400).send({ message: "Digite o nome do jogo." });
  }

  await service.cadastrarJogo(jogoNome, generoId, desenvolvedora, descricao);

  res.status(201).send({ message: "Jogo cadastrado com sucesso." });
});

routes.get("/", async (req, res) => {
  const [jogoLista] = await service.getAll();
  console.log(jogoLista)
  if (jogoLista.length == 0) {
    res.status(204).send({ message: "Nenhum jogo encontrado." });
  }

  res.status(200).send(jogoLista);
});

routes.get("/:jogoId", async (req, res) => {
  const { jogoId } = req.params

  const jogo = await service.getById(jogoId)
  console.log(jogo[0])

  res.status(200).send(jogo[0])
})

export default routes