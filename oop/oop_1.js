class staff {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  changeName(newName) {
    console.log(`${this.name} change to ${newName}`);
  }
}

const tai = new staff("Tai", 59);

tai.changeName("Suttipong");
