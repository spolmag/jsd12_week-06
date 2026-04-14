const { createZoo, addAnimal, showAllAnimals } = require("./Zoo");
const { createAnimal } = require("./animals/Animals");
const { createBird } = require("./animals/Bird");
const { createMammal } = require("./animals/Mammal");

//Create the zoo using a factory function
let myZoo = createZoo("Gen-Dee Zoo");

//Create animals using a factory function
let leo = createAnimal("Leo", "Lion");
let zazu = createBird("Zazu", "Hornbill", "2 feet");
let baloo = createMammal("Baloo", "Bear", "Brown");

// addAnimal returns a New Zoo
myZoo = addAnimal(myZoo, leo);
myZoo = addAnimal(myZoo, zazu);
myZoo = addAnimal(myZoo, baloo);

//showAllAnimals return a new zoo with updated (fed) animals
myZoo = showAllAnimals(myZoo);
