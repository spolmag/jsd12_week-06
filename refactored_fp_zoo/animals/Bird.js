const { createAnimal } = require("./Animals");

// Factory function — composes with createAnimal using spread instead of `extends`
function createBird(name, species, wingSpan) {
  return {
    ...createAnimal(name, species),
    wingSpan,

    makeSound: () => console.log(`${name} chirps: Jib' Jib'!`),
    fly: () => console.log(`${name} spreads wings ${wingSpan} and flies!`),
  };
}

module.exports = { createBird };
