import usuarioController from "./controller/usuarioController.js"
import express from "express";

const routes = express();

routes.use("/usuario", usuarioController)

export default routes;
