//Factory function replaces Animal class
function createAnimal(name, species) {
  return {
    name,
    species,
    hunger: 50,
    // makesound is store in a object as a function
    makeSound: () => console.log(`${name} makes a sound.`),
  };
}

//Pure function - read animal data, returns a string, no side effects
function getStatus(animal) {
  if (animal.hunger <= 0) return "Full";
  if (animal.hunger <= 20) return "Satisfied";
  return "Hungry";
}

function eat(animal) {
  if (animal.hunger <= 0) {
    console.log(`${animal.name} is already full!`);
    return animal;
  }
  const newHunger = animal.hunger - 10;
  console.log(`${animal.name} ate. Hunger is now ${newHunger}.`);
  return { ...animal, hunger: newHunger };
}

module.exports = { createAnimal, getStatus, eat };
