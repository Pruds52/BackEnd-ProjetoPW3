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
  const jogoLista = await conn.query(query)
  conn.end()
  
  return jogoLista
}

async function getById(jogoId){
  const query = "SELECT * FROM JOGO WHERE JogoId = ?;"

  const conn = await database.connect()
  const jogo = await conn.query(query, jogoId)
  conn.end()

  return jogo
}

async function deleteJogo(jogoId){
  const query = "DELETE FROM JOGO WHERE JogoId = ?;"

  const conn = await database.connect()
  await conn.query(query, jogoId)
  conn.end()
}

export default { cadastrarJogo, getAll, getById, deleteJogo };
