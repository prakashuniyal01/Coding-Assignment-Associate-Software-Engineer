/**
 * Perform sorting of an array in descending order. 
 */

const originalArray = [ 9, 21, 0, 100, 1, 5, 6];

// Sort the array in descending order
const sortedArray = originalArray.sort((a, b) => b - a);

console.log(sortedArray);