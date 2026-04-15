const { createDrink } = require("./Drink");

function createCoffee(name, type, price, onHand, bean) {
  return {
    ...createDrink(name, type, price, onHand),
    bean,
  };
}

module.exports = { createCoffee };
