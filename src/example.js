// This file demonstrates ESLint violations
const greeting = "Hello"
const name = "World"

console.log(`${greeting}, ${name}!`)

function sayHello(user) {
  const message = `Hello, ${user}`
  console.log(message)
  return message
}

const unusedVariable = "This will never be used"

const user = {
  name: "John",
  age: 30
}

console.log(user)

function calculate(x, y) {
  const result = x + y
  return result
}

calculate(5, 3)
