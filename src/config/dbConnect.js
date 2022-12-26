/* Nesse arquivo, teremos os arquivos de configuração com o banco de dados. Essa configuração será feita através do Mongoose. */

import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://alura:123@curso-alura-nodejs.btzg8ro.mongodb.net"
);

/* Abaixo, temos a conexão com o Mongoose. */
const db = mongoose.connection;

export default db;
