const Word = require('../classes/word_class');

exports.create = async (request, response) => {
  const word = new Word(request.body);
  await word.insert();
  response.json(word.getLiteral());
}

exports.readAll = async (request, response) => {
  const word = new Word();
  await word.getAll();
  response.json(word);
}

exports.read = async (request, response) => {
  const id = request.params.id;
  const word = new Word();
  await word.getById(id);
  response.json(word.getLiteral());
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
  await word.merge(request.body);
  await word.update(id);
  response.json(word.getLiteral());
}

exports.delete = async (request, response) => {
  const id = request.params.id;
  const empty = '';
  const word = new Word(request.body);
  await word.getById(id);
  await word.merge(request.body);
  await word.delete(id);
  response.json(word.getLiteral()); 
}