const Word = require('../classes/word_class');

exports.create = async (request, response) => {
  const word = new Word(request.body);
  await word.insert();
  response.json(word.getLiteral());
}

exports.read = async (request, response) => {
  const word = new Word();
  await word.getAll();
  response.json(word);
}

exports.getByWord = async (request, response) => {
  const word = new Word();
  await word.getByWord
  const results = await topSongs.getByArtistName(request.params.name);
  response.json(results);
}

exports.update = async (request, response) => {
  const id = request.params.id;
  const word = new Word();
  await word.getById(id);
  word.merge(request.body);
  await word.update(notes);
  response.json(word.getLiteral());
}

// exports.delete = async (request, response) => {
//   const word = new Word(request.body);
//   await word.getById(id);
//   response.json(word);
// }

// Follow Paul's Ice Cream OOP Example...
// Ask Paul... should we have a separate ORM file?
// Ask... Why routes are in the Controller file in 13.16
// Ask... where should we be doing error handling?
// No error handling in his Ice Cream OOP example. Controller?
