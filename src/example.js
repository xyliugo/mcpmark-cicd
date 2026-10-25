// This file contains intentional linting violations for testing
const unusedVariable = "This variable is never used";
let anotherUnused = 123;

console.log("Hello, World!");

const greeting = "Hello"

function sayHello(name) {
  let message = "Hello, " + name
  console.log(message)
  return message
}

const user = {
  name: "John",
  age: 30
}

console.log(user)

function calculate(x, y) {
  let result = x + y
  return result
}

calculate(5, 3)
