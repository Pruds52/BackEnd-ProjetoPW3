import database from "../repository/mysql.js";

async function getAll(){
  const query = "SELECT * FROM GENERO;"
  
  const conn = await database.connect()
  const generoLista = await conn.query(query)
  conn.end()
  
  return generoLista
}

export default { getAll };
