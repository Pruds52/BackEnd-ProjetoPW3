import database from "../repository/mysql.js";

async function cadastrarJogo(JogoNome, generoId, desenvolvedora, descricao) {
  const query = "INSERT INTO JOGO (JogoNome, GeneroId, Desenvolvedora, Descricao) VALUES (?, ?, ?, ?);";
  const data = [JogoNome, generoId, desenvolvedora, descricao];

  const conn = await database.connect();
  await conn.query(query, data);
  conn.end();
}

async function getAll(){
  const query = "SELECT * FROM JOGO;"
  
  const conn = await database.connect()
  const usuarioLista = await conn.query(query)
  conn.end()
  
  return usuarioLista
}

export default { cadastrarJogo, getAll };
