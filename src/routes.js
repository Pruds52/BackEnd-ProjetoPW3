import express from "express";
import usuarioController from "./controller/usuarioController.js"
import generoController from "./controller/generoController.js"

const routes = express();

routes.use("/usuario", usuarioController)
routes.use("/genero", generoController)

export default routes;
