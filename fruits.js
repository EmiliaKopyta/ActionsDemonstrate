const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Pineapple', 'Strawberry'];
const basket = [];

if (Math.random() > 0.5) basket.push('Apple'); //50% szans na jabłko
console.log('Basket:', basket);

// Export basket to use in the test
var basketString = JSON.stringify(basket);
const fs = require('fs');
fs.writeFileSync("basket.json", basketString);
