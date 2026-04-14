const { getStatus, eat } = require("./animals/Animals");

function createZoo(zooName) {
  return { zooName, animals: [] };
}

function addAnimal(zoo, animal) {
  console.log(`Added ${animal.name} to the ${zoo.zooName}.`);
  return { ...zoo, animals: [...zoo.animals, animal] };
}

function showAllAnimals(zoo) {
  console.log(`\n----------Welcome to ${zoo.zooName}----------`);

  const updatedAnimals = zoo.animals.map((animal) => {
    console.log(
      `Animal: ${animal.name} | Species: ${animal.species} | Status: ${getStatus(animal)}`,
    );
    animal.makeSound();
    const fedAnimal = eat(animal);
    console.log("--------------------\n");
    return fedAnimal;
  });
}

module.exports = { createZoo, addAnimal, showAllAnimals };
