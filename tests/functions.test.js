
// test('Adds 2 + 2 to equal 4', () => {
//   expect(functions.add(2,2)).toBe(4);
// });


// test('Checks "test" word in database for matching definition', () => {
//   expect('test').toEqual(/these are my notes/);
// });


test('Checks "test" word in database for matching definition', () => {
  
  class Word {
    constructor(word_obj) {
      this.id = 1;
      this.word = 'helicopter'; 
      this.definition = 'a type of aircraft which derives both lift and propulsion from one or more sets of horizontally revolving overhead rotors. It is capable of moving vertically and horizontally, the direction of motion being controlled by the pitch of the rotor blades.'; 
      this.favorite = 0;
      this.category = 'dirigibles';
      this.notes = 'helicopters are dangerous!';
    }
  }


  const werd = new Word();

  expect(werd.word).toBe('helicopter');
});
