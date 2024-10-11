import database from "../repository/mysql.js";

async function cadastrarUsuario(nome, email, senha) {
  const query = "INSERT INTO USUARIO (NOME, EMAIL, SENHA) VALUES (?, ?, ?);";
  const data = [nome, email, senha];

  const conn = await database.connect();
  await conn.query(query, data);
  conn.end();
}

export default { cadastrarUsuario };
