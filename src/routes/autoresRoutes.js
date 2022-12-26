import express from "express";

import AutorController from "../controllers/autoresController.js";

/* Nesse arquivo, definimos qual ação será executada quando uma rota for ativada. */

const router = express.Router();

/* Quando for enviada uma requisição do tipo "GET" para o "/livros", o método "listarLivros", do "LivroController", será utilizado. */
router.get("/autores", AutorController.listarAutores);

router.get("/autor/:id", AutorController.obterAutorPorId);

router.post("/autor", AutorController.cadastrarAutor);

router.put("/autor/:id", AutorController.atualizarAutor);

router.delete("/autor/:id", AutorController.excluirAutor);

export default router;
