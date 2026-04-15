const { createDrink } = require("./Drink");

function createBeer(name, type, price, onHand, degree) {
  return {
    ...createDrink(name, type, price, onHand),
    degree,
  };
}

module.exports = { createBeer };
