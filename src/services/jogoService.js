import database from "../repository/mysql.js";

async function cadastrarJogo(JogoNome, generoId, desenvolvedora, descricao) {
  const query = "INSERT INTO Jogo (JogoNome, GeneroId, Desenvolvedora, Descricao) VALUES (?, ?, ?, ?);";
  const data = [JogoNome, generoId, desenvolvedora, descricao];

  const conn = await database.connect();
  await conn.query(query, data);
  conn.end();
}

async function getAll(){
  const query = "SELECT * FROM Jogo;"
  
  const conn = await database.connect()
  const jogoLista = await conn.query(query)
  conn.end()
  
  return jogoLista
}

async function getById(jogoId){
  const query = "SELECT * FROM Jogo WHERE JogoId = ?;"

  const conn = await database.connect()
  const jogo = await conn.query(query, jogoId)
  conn.end()

  return jogo
}

async function deleteJogo(jogoId){
  const query = "DELETE FROM Jogo WHERE JogoId = ?;"

  const conn = await database.connect()
  await conn.query(query, jogoId)
  conn.end()
}

async function updateJogo(jogoNome, generoId, desenvolvedora, descricao, jogoId){
  console.log(jogoNome)
  const query = "UPDATE Jogo SET JogoNome = ?, GeneroId = ?, Desenvolvedora = ?, Descricao = ? WHERE JogoId = ?"
  const data = [jogoNome, generoId, desenvolvedora, descricao, jogoId]

  const conn = await database.connect()
  await conn.query(query, data)
  conn.end()
}

export default { cadastrarJogo, getAll, getById, deleteJogo, updateJogo };
