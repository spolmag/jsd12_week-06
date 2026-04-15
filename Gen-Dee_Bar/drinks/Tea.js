const { createDrink } = require("./Drink");

function createTea(name, type, price, onHand, from) {
  return {
    ...createDrink(name, type, price, onHand),
    from,
  };
}

module.exports = { createTea };
