function createDrink(name, type, price, onHand) {
  return {
    name,
    type,
    price,
    onHand,
  };
}

function availableStatus(drink) {
  if (drink.onHand <= 0) return "Out of service!";
  if (drink.onHand <= 10) return `Last ${drink.onHand} serve!`;
  return "Ready to serve.";
}

module.exports = { createDrink, availableStatus };
