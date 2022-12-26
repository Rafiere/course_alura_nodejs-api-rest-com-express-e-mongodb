import autores from "../models/Autor.js";

/* Nesse arquivo, temos a implementação dos métodos que serão chamados quando as rotas forem ativadas. */

class AutorController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      if (err) {
        console.log("Um erro foi gerado!");
      }
      res.status(200).json(autores);
    });
  };

  static obterAutorPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autor) => {
      if (err) {
        res
          .status(400)
          .send({ message: `O autor com o id ${id} não foi encontrado.` });
      } else {
        res.status(200).send(livro);
      }
    });
  };

  static cadastrarAutor = (req, res) => {
    const autor = new autores(req.body);

    autor.save((err) => {
      if (err) {
        console.log("Um erro ocorreu ao salvar o autor no banco de dados.");
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao Cadastrar Livro.` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: "Ocorreu um erro ao atualizar o autor." });
      } else {
        res
          .status(201)
          .send({ message: "O autor foi atualizado com sucesso!" });
      }
    });
  };

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(204).send({ message: "O autor foi removido com sucesso!" });
      } else {
        res
          .status(500)
          .send({ message: `O autor com o ID ${id} não foi removido.` });
      }
    });
  };
}

export default AutorController;
