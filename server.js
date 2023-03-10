// const http = require("http");

import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`O servidor está escutando em: http://localhost:${port}.`);
});

// const rotas = {
//   "/": "Curso de Node",
//   "/livros": "Entrei na página de livros.",
//   "/autores": "Listagem de Autores",
// };

/* Quando enviarmos uma requisição em "localhost:3000", o servidor deverá responder essa requisição com o status "200" e com a mensagem relativa à rota que foi chamada. */

/* Toda vez que o servidor HTTP receber uma requisição, a função de callback que foi passada para o método será executada. */

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

// /* Estamos definindo a porta que o servidor escutará. */
// server.listen(port, () => {
//   console.log("O servidor está escutando na porta 3000.");
// });
