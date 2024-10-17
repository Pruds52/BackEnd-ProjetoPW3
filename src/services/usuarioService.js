import database from "../repository/mysql.js";

async function cadastrarUsuario(nome, email, senha, dataNascimento) {
  const query = "INSERT INTO USUARIO (Nome, Email, Senha, DataNascimento) VALUES (?, ?, ?, ?);";
  const data = [nome, email, senha, dataNascimento];

  const conn = await database.connect();
  await conn.query(query, data);
  conn.end();
}

async function getAll(){
  const query = "SELECT * FROM USUARIO;"
  
  const conn = await database.connect()
  const usuarioLista = await conn.query(query)
  conn.end()
  
  return usuarioLista
}

export default { cadastrarUsuario, getAll };
