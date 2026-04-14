const Zoo = require("./Zoo");
const Animal = require("./Animal");
const Bird = require("./Bird");
const Mammal = require("./Mammal");

const myZoo = new Zoo("Gen-Dee Zoo");
const leo = new Animal("Leo", "Lion");
const zazoo = new Bird("Zazoo", "Bird", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "Brown");

myZoo.addAnimal(leo);
myZoo.addAnimal(zazoo);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();
