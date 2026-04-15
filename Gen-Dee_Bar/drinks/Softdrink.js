const { createDrink } = require("./Drink");

function createSoftdrink(name, type, price, onHand, sugar) {
  return {
    ...createDrink(name, type, price, onHand),
    sugar,
  };
}

module.exports = { createSoftdrink };
