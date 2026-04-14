const lion = {
  name: "Simba",
  species: "Lion",
  makesound: function () {
    console.log(`${this.name} says: ROAR!`);
  },
};

lion.makesound();

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50;
  }

  makesound() {
    console.log(`${this.name} make a sound.....`);
  }

  eat() {
    this._hunger = this._hunger -= 10;
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
  }
}

const leo = new Animal("Leo", "Lion");

console.log(leo);
leo.eat();
console.log(leo._hunger);

class Manmal extends Animal {
  constructor(name, species, furcolor) {
    super(name, species);
    this.furcolor = furcolor;
  }
  groom() {
    console.log(`${this.name} is brushing their ${this.furcolor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingspan) {
    super(name, species);
    this.wingspan = wingspan;
  }
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}
