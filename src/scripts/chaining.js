// --------------- Challenge: Chaining Methods ---------------

// 1. Sort the numbers in descending order(10, 9, 8, 7, etc).
// 2. Remove any integers greater than 19.
// 3. Multiply each remaining number by 1.5 and then subtract 1.
// 4. Then output(either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort((a, b) => b - a));

console.log(integers.sort((a, b) => b - a).filter(number => number < 19));

console.log(integers.sort((a, b) => b - a).filter(number => number < 19).map(num => num * 1.5 - 1));

console.log(integers.sort((a, b) => b - a).filter(number => number < 19).map(num => num * 1.5 - 1).reduce((acc, curr) => acc + curr));
