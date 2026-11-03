function calculateTotal(items) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return total;
}

const greeting = 'Hello World';

console.log(greeting);
