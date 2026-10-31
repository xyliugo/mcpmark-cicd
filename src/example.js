// This file demonstrates ESLint violations
const greeting = "Hello"
const name = "World"
const unusedVariable = "This will cause an error"

console.log(`${greeting}, ${name}!`)

function sayHello(user) {
  const message = `Hello, ${user}`
  console.log(message)
  return message
}

const userObj = {
  name: "John",
  age: 30
}

console.log(userObj)

function calculate(x, y) {
  const result = x + y
  return result
}

calculate(5, 3)
