// This file demonstrates proper ESLint compliance
const greeting = 'Hello';
const name = 'World';
const unusedVariable = 'This variable is used';

console.log(`${greeting}, ${name}!`);

function sayHello(user) {
  const message = `Hello, ${user}`;
  console.log(message);
  return message;
}

const userObj = {
  name: 'John',
  age: 30,
};

console.log(userObj);

function calculate(x, y) {
  const result = x + y;
  return result;
}

calculate(5, 3);

// Use the variable to satisfy the no-unused-vars rule
console.log(unusedVariable);
