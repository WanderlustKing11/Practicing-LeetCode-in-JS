// 66. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// First try ...

// const plusOne = (digits) => {
//   // find the last element in the array and save it to a variable
// //   const singleDigit = digits.slice(-1);
//   // add + 1 to the value of singleDigit at the end of the original array
//   return digits.splice((digits.length-1), 1, (digits.slice(-1)[0] + 1)); // refactored by removing the use of a variable.
//   console.log(digits);
// };

// Using `digits.length` allows us to directly accss and modify the last element of the `digits` array. `digits.slice(-1)` returns a new array containing the last element of the `digits` array. The result is itself an array, not an index.

// V-2.0
// const plusOne = (digits) => {
//   const lastDigit = digits[digits.length - 1] + 1;
//   if (lastDigit === 10) {
//     digits.splice([digits.length - 1], 1, 1, 0);
//   } else {
//     digits[digits.length - 1] = lastDigit;
//   }
//   return digits;
// };

// console.log(plusOne([3, 6, 9]));
// We're getting close, but the array is supposed to represent an entire integer. So I'm only taking account the last digit. But if the given input is [2, 2, 9, 9], then the output should be [2, 3, 0, 0]. Let's fix this.

// V-3.0
const plusOne = (digits) => {
  const int = Number(digits.join('')) + 1;
  const intArr = String(int).split('').map((int)=>{
    return Number(int);
  });
  return intArr;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));


// Here's for TS
// function plusOne(digits: number[]): number[] {
//   const lastDigit = digits[digits.length - 1] + 1;
//   if (lastDigit === 10) {
//     digits.splice(digits.length - 1, 1, 1, 0);
//   } else {
//     digits[digits.length - 1] = lastDigit;
//   }
//   return digits;
// }

// console.log(plusOne([3, 6, 9]));