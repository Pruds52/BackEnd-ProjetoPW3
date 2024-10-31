import express from "express";
import service from "../services/generoService.js"

const routes = express.Router();

routes.get("/", async (req, res) => {
  const [generoLista] = await service.getAll();
  console.log(generoLista)
  if (generoLista.length == 0) {
    res.status(204).send({ message: "Nenhum gênero encontrado." });
  }

  res.status(200).send(generoLista);
});

export default routes