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
    console.log(`\n--- Welcome to ${this.zooName} ---`);
    this.animals.forEach((animal) => {
      // Accessing properties and calling methods
      //   console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`);
      console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`); //can call getStatus function form class 'Animal'
      animal.makeSound();
      animal.eat();
      console.log("-------------------");
    });
  }
}

//Export to other files
module.exports = Zoo;
