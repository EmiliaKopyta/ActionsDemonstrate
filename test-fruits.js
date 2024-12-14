const fs = require('fs');

try {
  const basket = JSON.parse(fs.readFileSync('basket.json', 'utf-8'));
  console.log('Testing basket:', basket);

  if (basket.includes('Apple')) {
    console.log('Test passed: Apple is in the basket.');
    process.exit(0);
  } else {
    console.log('Test failed: Apple is not in the basket.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error reading basket:', error);
  process.exit(1);
}
