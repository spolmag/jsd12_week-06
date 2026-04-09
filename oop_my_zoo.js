class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`\nAdd ${animal.name} to ${this.zooName}`);
  }

  showAllAnimals() {
    console.log(`\n<-----Welcome to ${this.zooName}----->`);
    console.log(`Let's meet our Star!\n`);
    this.animals.forEach((animal) => {
      console.log(`Species: ${animal.species}`);
      console.log(`Sub species: ${animal.subSpecies}`);
      console.log(`Name: ${animal.name}`);
      animal.makeSound();
      console.log(`------------------------------`);
    });
  }
}

class Animal {
  constructor(species, subSpecies, name, sound) {
    this.species = species;
    this.subSpecies = subSpecies;
    this.name = name;
    this.sound = sound;
    this._hungerLevel = 100;
  }

  makeSound() {
    console.log(`${this.name} make a sound: ` + animalSound);
  }
}

class Mammal extends Animal {
  constructor(species, subSpecies, name, sound, furColor) {
    super(species, subSpecies, name);
    this.furColor = furColor;
  }
}

class Bird extends Animal {
  constructor(species, subSpecies, name, wingSpan) {
    super(species, subSpecies, name);
    this.wingSpan = wingSpan;
  }
}

const myZoo = new Zoo("Suttipong's Zoo");
const zimba = new Animal("Lion", "African Lion", "Zimba");
const ploy = new Manmal("Cat", "Siamese Cat", "Ploy", "Brown");
const jib = new Bird("Bird", "Parrot", "Jib", "1 feet");

myZoo.addAnimal(zimba);
myZoo.addAnimal(ploy);
myZoo.addAnimal(jib);

myZoo.showAllAnimals();
