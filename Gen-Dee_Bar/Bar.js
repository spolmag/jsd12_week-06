const { availableStatus } = require("./drinks/Drink");

function createBar(barName) {
  return { barName, drinks: [] };
}

function addMenu(bar, drink) {
  console.log(`${drink.name} added to ${bar.barName} menu.\n`);
  return { ...bar, drinks: [...bar.drinks, drink] };
}

function showMenu(bar) {
  console.log(`\n----------Welcome to ${bar.barName}----------`);
  console.log(`Please select your drink!\n`);

  const updateMenu = bar.drinks.map((drink) => {
    if (drink.type === "Beer") {
      console.log(`${drink.name} | ${drink.type}-Degree ${drink.degree}`);
    }
    if (drink.type === "Coffee") {
      console.log(`${drink.name} | ${drink.type}-${drink.bean}`);
    }
    if (drink.type === "Juice") {
      console.log(`${drink.name} | ${drink.type}-${drink.madeFrom}`);
    }
    if (drink.type === "Tea") {
      console.log(`${drink.name} | ${drink.type}-${drink.from}`);
    }
    if (drink.type === "Soft drink") {
      console.log(`${drink.name} | ${drink.type}-${drink.sugar}`);
    }
    console.log(`Price: ${drink.price}THB`);
    console.log(`Available: ` + availableStatus(drink));
    console.log("--------------------\n");
  });

  return { ...bar, drink: updateMenu };
}

module.exports = { createBar, addMenu, showMenu };
