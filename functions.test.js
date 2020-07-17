const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});


// test('Checks "test" word in database for matching definition', () => {
//   expect('test').toEqual(/these are my notes/);
// });


// test('Checks "test" word in database for matching definition', () => {
  
//   const row = {
//     id: 1,
//     word: 'word', 
//     definition: 'definition', 
//     favorite: '0',

//     ///
//   }

//   const word = new Word(row)

//   expect(word.word).toBe('test');
// });

