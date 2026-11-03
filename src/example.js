function calculateTotal(items) {
    console.log('Calculating total...');
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return total
}

const greeting = "Hello World";
const unusedVariable = 'I am not used';

console.log(greeting);
