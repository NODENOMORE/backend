const mysql = require('../config/connection');

exports.selectAll = async () => {
  const connection = await mysql.connect();
  const [data] = await connection.query(`SELECT * FROM mywords`);
  return data;
}

// exports.selectOne = async (word) => {
//   const connection = await mysql.connect();
//   const [data] = await connection.query(`SELECT * FROM mywords WHERE word = ?`, [word]);
//   return data;
// }

exports.insert = async (id, word_obj) => {
  const connection = await mysql.connect();
  const [data] = await connection.query(`INSERT INTO mywords SET ?`, [word_obj, id]);
  return data;
}

exports.update = async (id, word_obj) => {
  const connection = await mysql.connect();
  const [data] = await connection.query(`UPDATE mywords SET ? WHERE  id = id:`, [word_obj]);
  return data;
}