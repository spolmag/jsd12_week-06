const { createDrink } = require("./Drink");

function createJuice(name, type, price, onHand, madeFrom) {
  return {
    ...createDrink(name, type, price, onHand),
    madeFrom,
  };
}

module.exports = { createJuice };
