// Building a virtual Zoo
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50;
  }

  getStatus() {
    if (this._hunger <= 0) return "Full";
    if (this._hunger <= 20) return "Satisfied";
    return "Hungry";
  }

  eat() {
    if (this._hunger <= 0) {
      console.log(`${this.name} is already full.`);
    } else {
      this._hunger = this._hunger - 10;
      console.log(`${this.name} ate. Hunger is now ${this._hunger}.`);
    }
  }

  makesound() {
    console.log(`${this.name} make a generic sound.`);
  }
}

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species);
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their${this.furColor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingSpan) {
    super(name, species);
    this.wingSpan = wingSpan;
  }

  makesound() {
    console.log(`${this.name} is make sound: Jib! Jib!`);
  }

  fly() {
    console.log(`${this.name} spreads wing ${this.wingSpan} and flies.`);
  }
}

class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the ${this.zooName}.`);
  }

  showAllanimals() {
    console.log(`\n----------Welcome to ${this.zooName}-----------\n`);
    this.animals.forEach((animal) => {
      console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`);
      animal.makesound();
      animal.eat();
      console.log(`---------------------------------\n`);
    });
  }
}

const myZoo = new Zoo("Gen-Dee Zoo");

const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "Brown");

myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

myZoo.showAllanimals();
