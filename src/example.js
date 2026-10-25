// This file demonstrates proper ESLint compliance
const greeting = 'Hello';
const name = 'World';

console.log(`${greeting}, ${name}!`);

function sayHello(user) {
  const message = `Hello, ${user}`;
  console.log(message);
  return message;
}

const user = {
  name: 'John',
  age: 30,
};

console.log(user);

function calculate(x, y) {
  const result = x + y;
  return result;
}

calculate(5, 3);
