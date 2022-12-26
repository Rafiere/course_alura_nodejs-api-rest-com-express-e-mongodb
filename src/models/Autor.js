import mongoose from "mongoose";

/* O "version key" versiona os modelos, assim, se inserirmos um novo atributo, saberemos que, em uma determinada versão do modelo, um determinado atributo estará presente ou não. */
const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  {
    versionKey: false,
  }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;
