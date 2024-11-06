// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (numArray: number[]): number => {
  const sumArrayNumbers = numArray.reduce((a: number, b: number) => a + b);
  return sumArrayNumbers;
};

const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
