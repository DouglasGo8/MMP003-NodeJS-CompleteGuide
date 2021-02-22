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

const toArray = (...args) => {
  return args;
};

const printName = ({ name }) => {
  console.log(name);
};

const hobbies = ["Sporting", "Cooking"];

hobbies.forEach((h) => console.log(h));
console.log(hobbies.map((h) => "Hobby is..." + h));

person.greet();
person.greetV2();

//
hobbies.push("Programming");

console.log(hobbies);

const shallowHobby = [...hobbies]; // using spread operator
const shallowPerson = { ...person };

console.log(shallowHobby);
console.log(shallowPerson);
console.log(toArray(1, 2, 3));

const { name, age } = person;
console.log(name, age);
