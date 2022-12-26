import livros from "../models/Livro.js";

/* Nesse arquivo, temos a implementação dos métodos que serão chamados quando as rotas forem ativadas. */

class LivroController {
  static listarLivros = (req, res) => {
    livros
      .find()
      .populate("autor")
      .exec((err, livros) => {
        if (err) {
          console.log("Um erro foi gerado!");
        }
        res.status(200).json(livros);
      });
  };

  static obterLivroPorId = (req, res) => {
    const id = req.params.id;

    livros
      .findById(id)
      .populate("autor", "nome")
      .exec((err, livro) => {
        if (err) {
          res
            .status(400)
            .send({ message: `O livro com o id ${id} não foi encontrado.` });
        } else {
          res.status(200).send(livro);
        }
      });
  };

  static cadastrarLivro = (req, res) => {
    const livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        console.log("Um erro ocorreu ao salvar o livro no banco de dados.");
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao Cadastrar Livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: "Ocorreu um erro ao atualizar o livro." });
      } else {
        res
          .status(201)
          .send({ message: "O livro foi atualizado com sucesso!" });
      }
    });
  };

  static excluirLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(204).send({ message: "O livro foi removido com sucesso!" });
      } else {
        res
          .status(500)
          .send({ message: `O livro com o ID ${id} não foi removido.` });
      }
    });
  };

  static listarLivroPorEditora = (req, res) => {
    const editora = req.query.editora;

    /* Estamos localizando o que a editora for igual ao parâmetro "editora". */
    livros.find(
      {
        editora: editora,
      },
      {},
      (err, livros) => {
        res.status(200).send(livros);
      }
    );
  };
}

export default LivroController;
