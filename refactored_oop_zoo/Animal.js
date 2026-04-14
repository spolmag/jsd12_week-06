class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50;
  }

  makeSound() {
    console.log(`${this.name} make sound....!`);
  }

  getStatus() {
    if (this._hunger <= 0) return "Full";
    if (this._hunger <= 20) return "Satisfied";
    return "Hungry";
  }

  eat() {
    if (this._hunger <= 0) {
      console.log(`${this.name} is already full.`);
    } else {
      this._hunger = this._hunger - 10;
      console.log(`${this.name} ate. Hunger is now ${this._hunger}.`);
    }
  }
}

module.exports = Animal;
