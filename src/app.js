import express from "express";

import db from "./config/dbConnect.js";

import livros from "./models/Livro.js";

import routes from "./routes/index.js";

/* Estamos inicializando a conexão com o banco de dados. */

/* Caso ocorra algum erro, exibiremos esse erro no terminal. */
db.on("error", console.log.bind(console, "Erro de Conexão"));

/* Estamos abrindo a conexão com o banco. */
db.once("open", () => {
  console.log("A conexão com o banco foi realizada com sucesso.");
});

/* Estamos inicializando o Express. */

const app = express();

app.use(express.json());

routes(app);

export default app;
