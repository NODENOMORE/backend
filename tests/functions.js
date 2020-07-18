class Word {
  constructor(word_obj) {
    this.id = 1;
    this.word = 'helicopter'; 
    this.definition = 'a type of aircraft which derives both lift and propulsion from one or more sets of horizontally revolving overhead rotors. It is capable of moving vertically and horizontally, the direction of motion being controlled by the pitch of the rotor blades.'; 
    this.favorite = 0;
    this.category = 'dirigibles';
    this.notes = 'helicopters are dangerous!';
  }   

  getLength(){
    this.word.length;
  }

}

module.exports = functions;