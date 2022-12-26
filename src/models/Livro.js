import mongoose from "mongoose";

/* Esse modelo representará um livro no banco. */
const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroDePaginas: { type: Number },
});

/* A coleção, no banco de dados, se chamará "livros". */
const livros = mongoose.model("livros", livroSchema);

export default livros;
