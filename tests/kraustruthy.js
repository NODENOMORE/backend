class Vocab {
    constructor(vocab_obj) {
        this.id = 1;
        this.word = 'canoe';
        this.definition = 'A narrow, keelless boat with pointed ends, propelled by a paddle or paddles.';
        this.favorite = 0;
        this.category = 'favorite';
        this.notes = 'Origin: Mid 16th century from Spanish canoa, from Arawak, from Carib canaoua.';
    }
}
const term = new Vocab();
let myTest = () => {
    if (term.favorite === 1 || 0);
    return true;
}
module.exports = Vocab;
