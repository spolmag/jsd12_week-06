// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full implementation using Encapsulation, Inheritance, and Polymorphism.

const lion = {
  name: "Simba",
  species: "Lion",
  makeSound: function () {
    console.log(`${this.name} says: ROAR!!`);
  },
};

lion.makeSound();

// The class Template (Encapsulation)

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; //Internal state (protected by _)
  }

  makeSound() {
    console.log(`${this.name} makes a sound ...`);
  }

  eat() {
    this._hunger -= 10;
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
  }
}

const zimba = new Animal("Zimba", "Lion");
const star = new Animal("Star", "Cat");

zimba.makeSound();
console.log(`${zimba.name} hunger is now ${zimba._hunger}`);
zimba.eat();
console.log(zimba._hunger);

star.makeSound();
console.log(`${star.name} hunger is now ${star._hunger}`);
star.eat();
console.log(star._hunger);

//specialized classes (inheritance)
// Inherit from class 'Animal'
class Mammal extends Animal {
  //Animal is parent of Mammal
  constructor(name, species, furColor) {
    super(name, species); //call the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingSpan) {
    super(name, species);
    this.wingSpan = wingSpan;
  }

  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`); //polymorphism -> overwrite original makeSound from Animal class
  }
}

const blacky = new Mammal("Blacky", "Dog", "Black");
blacky.eat();
blacky.groom();

const jib = new Bird("Jib", "Bird", 50);
jib.makeSound();
