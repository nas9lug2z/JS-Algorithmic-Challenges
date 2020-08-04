// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function (yourName) {
//     return `Hello ${yourName}, my name is ${this.name}`;
// }


//ES6:


class Person {
    constructor (name) {
        this.name = name;
    }
    greet(yourName) {
        return `Hello ${yourName}, my name is ${this.name}`;
    }
}

let joe = new Person ('Joe');
console.log(joe.greet('Anee'));