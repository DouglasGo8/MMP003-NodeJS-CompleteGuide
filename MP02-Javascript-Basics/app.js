const age = 29;
const name = "Max";
const hasHobbies = true;

/**
 *
 * @param {*} a
 * @param {*} b
 * @param {*} func
 */
const add = (a, b, func) => {
  const result = a + b;
  func(result);
};

/**
 *
 * @param {*} a
 * @param {*} b
 */
const multiple = (a, b) => a * b;

/**
 *
 * @param {*} param
 */
const printMe = (param) => console.log(param);

/**
 *
 */
const addNoParam = () => 1 + 2;

/**
 *
 * @param {*} userName
 * @param {*} userAge
 * @param {*} userHasHobby
 */
const summarizeUserV2 = (userName, userAge, userHasHobby) => {
  return `Name is ${userName}, age is ${userAge} has hobby: ${userHasHobby}`;
};

/**
 *
 * @param {*} userName
 * @param {*} userAge
 * @param {*} userHasHobby
 */
function summarizeUser(userName, userAge, userHasHobby) {
  return `Name is ${userName}, age is ${userAge} has hobby: ${userHasHobby}`;
}

//console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUserV2(name, age, hasHobbies));

add(2, 2, console.log);
