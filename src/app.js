import express from "express";

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "Senhor dos Anéis" },
  { id: 2, titulo: "O Hobbit" },
];

app.get("/livros/:id", (request, response) => {
  const indexLivro = buscarLivroPeloId(request.params.id);

  const livroBuscado = livros[indexLivro];

  response.status(200).send(livroBuscado);
});

app.get("/livros", (request, response) => {
  response.status(200).json(livros);
});

app.post("/livros", (request, response) => {
  livros.push(request.body);
  response.status(201).json(livros[livros.length - 1]);
});

app.put("/livros/:id", (request, response) => {
  const idRequisicao = request.params.id;

  const livroEditadoIndex = buscarLivroPeloId(idRequisicao);

  livros[livroEditadoIndex].titulo = request.body.titulo;

  response.status(204).json(livros[livroEditadoIndex]);
});

app.delete("/livros/:id", (request, response) => {
  const idRequisicao = request.params.id;
  const idLivroExcluido = buscarLivroPeloId(idRequisicao);

  livros.splice(idLivroExcluido, 1);

  response.send(
    `O livro com o id ${idLivroExcluido} foi excluído com sucesso.`
  );
});

const buscarLivroPeloId = (idRequisicao) => {
  return livros.findIndex((livro) => livro.id == idRequisicao);
};

export default app;
