const person = {
  name: "Max",
  age: 29,
  greet: function () {
    console.log(`Hi ${this.name}`);
  },
  greetV2() {
    console.log(`Hi ${this.name}`);
  },
};

const hobbies = ["Sporting", "Cooking"];

hobbies.forEach((h) => console.log(h));

person.greet();
person.greetV2();
