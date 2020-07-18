const Word = require('../classes/word_class');

// test('Checks "?" vocab in database for a Favorite Word', () => {
//     class Word {
//         constructor(word_obj) {
//             this.id = 8;
//             this.word = 'Rabbit';
//             this.definition = 'a burrowing, gregarious, plant-eating mammal with long ears, long hind legs, and a short tail.';
//             this.favorite = 0;
//             this.category = 'Animals';
//             this.notes = 'Rabbits are small mammals in the family Leporidae of the order Lagomorpha.';
//         }
//     }
//     const result = new Word();
//     expect(result.favorite).toBe(0);
// });


describe("Word class", () => {
    describe('this._word is equal to undefined', () => {
        const result = new Word();
        expect(result._word).toBe(undefined);
    });



    // describe("get by id method", () => {
    //     it("Should return a word from the database by id", () => {
    //         const result = new Word('')._word.id;
    //         expect(result).toBeUndefined();
    //     });
    // });

    // describe("get by id method", () => {
    //     it("Should return a word from the database by id", () => {
    //         const id = 8;
    //         const wordByid = {
    //             id: '8',
    //             word: 'Rabbit',
    //             definition: 'a burrowing, gregarious, plant-eating mammal with long ears, long hind legs, and a short tail.',
    //             favorite: '0',
    //             category: 'Animals',
    //             notes: 'Rabbits are small mammals in the family Leporidae of the order Lagomorpha.'
    //         };
    //
    //         const result = new Word().word.getById(id);
    //
    //         expect(result).toBe(wordByid);
    //     });
    // });

});
