import express from "express";
import usuarioController from "./controller/usuarioController.js"
import generoController from "./controller/generoController.js"
import jogoController from "./controller/jogoController.js"

const routes = express();

routes.use("/usuario", usuarioController)
routes.use("/genero", generoController)
routes.use("/jogo", jogoController)

export default routes;
