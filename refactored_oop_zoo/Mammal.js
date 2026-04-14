const Animal = require("./Animal");

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species);
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is bushing thier ${this.furColor} fur.`);
  }
}

module.exports = Mammal;
