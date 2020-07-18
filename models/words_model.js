const mysql = require('../config/connection');

exports.insert = async (word_obj) => {
  const connection = await mysql.connect();
  const [data] = await connection.query(`INSERT INTO mywords SET ?`, word_obj);
  return data;
}

exports.selectAll = async () => {
  const connection = await mysql.connect();
  const [data] = await connection.query(`SELECT * FROM mywords`);
  return data;
}

exports.selectById = async (id) => {
  const connection = await mysql.connect();
  const [data] = await connection.query(`SELECT * FROM mywords WHERE id = ?`, [id]);
  return data[0];
}

exports.update = async (id, word_obj) => {
  const connection = await mysql.connect();
  const [data] = await connection.query(`UPDATE mywords SET ? WHERE id = ?`,  [word_obj, id]);
  return data;
}

exports.delete = async (id) => {
  const connection = await mysql.connect();
  const [data] = await connection.query(`DELETE FROM mywords WHERE id = ?`, [id]);
  // console.log('Was your stuff deleted?')
  return data;
}