const wordModel = require('../models/words_model');

class Word {
  constructor(word_obj) {
      this._word = word_obj;
  }

  get id(){
      return this._word.id;
  }

  get word(){
    return this._word.word;
  }

  set word(word_obj){
    this.word.price = price;
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

  get category(){
    return this._word.notes;
  }

  async getAll(){
      this._word = await wordModel.selectAll();
  }

  async getById(id){
      this._word = await wordModel.selectAllBy(id);
  }

  async insert(){
    const results = await wordModel.insert(this._word);
    this._word = results.insertId;
  }

  async update(id){
    await wordModel.update(id, this._word);
  }

  getLiteral(){
      return this._word;
  }

}

// Word.definition = "This Stuff";

// console.log(Word)

// const fun = new Word()

// console.log(fun.definition)

module.exports = Word;

//make a word class object and test the id is the definnition you gave it
//you pass in "one"
//add one key per column in class
// hard code an object literal
// make it look like it came from a db
//
