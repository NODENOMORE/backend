const wordModel = require('../models/words_model');

class Word {

  //////////////////////////////////////

  constructor(word_obj) {
      this._word = word_obj;
  }

  //////////////////////////////////////

  get id(){
      return this._word.id;
  }

  get word(){
    return this._word.word;
  }

  set word(word){
    this._word.word = word;
  }

  get notes(){
    return this._word.notes;
  }

  set notes(notes){
    this._word.notes = notes;
  }
  
  get definition(){
      return this._word.definition;
  }

  get favorite(){
    return this._word.favorite;
  }

  get category(){
    return this._word.category;
  }

  //////////////////////////////////////
  // CREATE //

  async insert(){
    const results = await wordModel.insert(this._word);
    this._word = results.insertId;
  }

  //////////////////////////////////////
  // READ / RETREIVE //

  async getById(id){
      this._word = await wordModel.selectById(id);
  }

  async getAll(){
    this._word = await wordModel.selectAll();
  }

  //////////////////////////////////////
  // UPDATE //

  async merge(new_word){
    this._word = await {...this._word, ...new_word};
  }

  async update(id){
    await wordModel.update(id, this._word);
  }

  //////////////////////////////////////
  // DELETE //

  async delete(id){
    const results = await wordModel.delete(id, this._word);
    this._word = '';
  }

  getLiteral(){
      return this._word;
  }

}

module.exports = Word;

