const { createBar, addMenu, showMenu } = require("./Bar");
const { createDrink, availableStatus } = require("./drinks/Drink");
const { createBeer } = require("./drinks/Beer");
const { createCoffee } = require("./drinks/Coffee");
const { createJuice } = require("./drinks/Juice");
const { createSoftdrink } = require("./drinks/Softdrink");
const { createTea } = require("./drinks/Tea");

let myBar = createBar("Gen-Dee Bar");
let blackBeer = createBeer("Blackbeer", "Beer", 120, 0, "15%");
let lagerbeer = createBeer("Lagerbeer", "Beer", 120, 10, "7%");
let hoegaarden = createBeer("Hoegaarden", "Beer", 120, 13, "9%");
let chang = createBeer("Chang", "Beer", 100, 15, "18%");
let orangeJuice = createJuice("Orange juice", "Juice", 50, 8, "Orange");
let cherryBoom = createJuice("Cherry Boom", "Juice", 50, 25, "Cherry");
let matcha = createTea("Matcha", "Tea", 50, 2, "Japan");
let americano = createCoffee("Americano", "Coffee", 60, 25, "Arabica");
let coke = createSoftdrink("Coke", "Soft drink", 30, 55, "0%");

myBar = addMenu(myBar, blackBeer);
myBar = addMenu(myBar, lagerbeer);
myBar = addMenu(myBar, hoegaarden);
myBar = addMenu(myBar, chang);
myBar = addMenu(myBar, orangeJuice);
myBar = addMenu(myBar, cherryBoom);
myBar = addMenu(myBar, matcha);
myBar = addMenu(myBar, americano);
myBar = addMenu(myBar, coke);

myBar = showMenu(myBar);
