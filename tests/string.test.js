test('Checks "test" vocab in database for a matching term', () => {
    class Vocab {
      constructor(vocab_obj) {
        this.id = 1;
        this.word = 'pickle'; 
        this.definition = 'not only a fermented cumcumber, but can be used figuratively to describe anyone in a tough situation.'; 
        this.favorite = 0;
        this.category = 'figurative';
        this.notes = 'Paul got himself in a real pickle when using Pickle Paul filter in Zoom';
      }
    }
    const term = new Vocab();
    expect(term.word).toBe('pickle');
  });
