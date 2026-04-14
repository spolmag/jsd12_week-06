class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the ${this.zooName}`);
  }

  showAllAnimals() {
    console.log(`\n----------Welcome to ${this.zooName}----------`);
    console.log(`Let's meet our Star!\n`);
    this.animals.forEach((animal) => {
      console.log(
        `Name: ${animal.name} | Species: ${animal.species} | Status: ${animal.getStatus()}`,
      );
      animal.makeSound();
      animal.eat();
      console.log(`------------------------------\n`);
    });
  }
}

module.exports = Zoo;
