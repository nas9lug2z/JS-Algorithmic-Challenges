class Dictionary {
    constructor(word, definition) {
      this.word = word;
      this.definition = definition;
    }
    newEntry(word, definition) {
      this.word = word;
      this.definition = definition;
    }
    look(key) {
        if (this.word.toLowerCase() === key.toLowerCase()) {
            return this.definition
        }
        else {
            return `Can't find entry for ${key}`
        }
  }
}

let d = new Dictionary();

d.newEntry('Apple', 'A fruit');
console.log(d.look('Apple'));

d.newEntry('Soccer', 'A sport');
console.log(d.look('soccer'));
console.log(d.look('Hi'));
console.log(d.look('Ball'));

// d.newEntry('soccer', 'a sport');
// console.log(d.look('soccer'));
d.newEntry('hcespgrz', 'eqkywzqlfzmwl');
console.log(d.look('hcespgrz'));

