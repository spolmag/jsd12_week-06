const Animal = require("./Animal");

class Bird extends Animal {
  constructor(name, species, wingSpan) {
    super(name, species);
    this.wingSpan = wingSpan;
  }

  makeSound() {
    console.log(`${this.name} chirp: Jib! JIb!`);
  }

  fly() {
    console.log(`${this.name} spread wings ${this.wingSpan} and flies.`);
  }
}

module.exports = Bird;
