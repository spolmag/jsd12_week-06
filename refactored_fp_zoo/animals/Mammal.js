const { createAnimal } = require("./Animals");

function createMammal(name, species, furColor) {
  const animal = createAnimal(name, species);
  return {
    name: animal.name,
    species: animal.species,
    hunger: animal.hunger,
    makeSound: animal.makeSound,
    furColor,
    groom: () => console.log(`${name} is brushing their ${furColor} fur.`),
  };
}

module.exports = { createMammal };
