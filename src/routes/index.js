/* Nesse arquivo, ficarão armazenadas todas as rotas da aplicação. */

import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de Node" });
  });

  /* Temos a rota de "livros", que, tirando a rota acima, é a rota que temos disponível. */
  app.use(express.json(), livros);
};

export default routes;
