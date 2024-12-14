const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Pineapple', 'Strawberry'];
const basket = [];

if (Math.random() > 0.5) { //50% szans na jabłko
  basket.push('Apple');
} else { //jeśli nie jabłko, to inny owoc z listy
  const otherFruits = fruits.filter(fruit => fruit !== 'Apple'); 
  const randomFruit = otherFruits[Math.floor(Math.random() * otherFruits.length)];
  basket.push(randomFruit);
}

var basketString = JSON.stringify(basket);
const fs = require('fs');
fs.writeFileSync("basket.json", basketString);
