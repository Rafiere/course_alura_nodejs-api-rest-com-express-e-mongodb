import express from "express";

import LivroController from "../controllers/livrosController.js";

/* Nesse arquivo, definimos qual ação será executada quando uma rota for ativada. */

const router = express.Router();

/* Quando for enviada uma requisição do tipo "GET" para o "/livros", o método "listarLivros", do "LivroController", será utilizado. */
router.get("/livros", LivroController.listarLivros);

router.get("/livros/:id", LivroController.obterLivroPorId);

router.post("/livro", LivroController.cadastrarLivro);

router.put("/livros/:id", LivroController.atualizarLivro);

router.delete("/livro/:id", LivroController.excluirLivro);

export default router;
