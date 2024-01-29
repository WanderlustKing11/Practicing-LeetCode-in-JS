// 66. Plus One
// You are given a large integer represented as an 
// integer array digits, where each digits[i] is the ith 
// digit of the integer. The digits are ordered from most 
// significant to least significant in left-to-right 
// order. The large integer does not contain any leading 
// 0's.

// Increment the large integer by one and return the 
// resulting array of digits.

 

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

// Using `digits.length` allows us to directly access 
// and modify the last element of the `digits` array. 
// `digits.slice(-1)` returns a new array containing 
// the last element of the `digits` array. The result is 
// itself an array, not an index.


//////////////////////////////////////////////////

// V-3.0 - This works!
// Approach, join the array into a long integer, then
// add 1 to the number. Then split the digits back up 
// into the original array format.

// const digits = [3,6,9]

// const plusOne = (digits) => {
//   const int = Number(digits.join('')) + 1;
//   const intArr = String(int).split('').map((int)=>{
//     return Number(int);
//   });
//   console.log(intArr);
// };

// plusOne(digits);

///////////////////////////////////////////////////

// Here's for TS
// function tsPlusOne(digits: number[]): number[] {
//   const lastDigit = digits[digits.length - 1] + 1;
//   if (lastDigit === 10) {
//     digits.splice(digits.length - 1, 1, 1, 0);
//   } else {
//     digits[digits.length - 1] = lastDigit;
//   }
//   return digits;
// }

// console.log(tsPlusOne([3, 6, 9]));

///////////////////////////////////////////////

// V4.0 The While Loop Approach
// Use conditional statemtents and loop to see if there are 9s
// 

// const given = [6,5,9,9,9];
// // Expected Output: [6,5,4,4]

// function newOne(given) {
//   let lastDigit = given.length - 1;
//   given[lastDigit] += 1;
//   if (given[lastDigit] !== 10) {    
//     console.log(given);
//   } else {
//     while (given[lastDigit] === 10) {
//       given[lastDigit] = 0;
//       given[lastDigit - 1] += 1;
//       lastDigit -= 1;
//     }
//     console.log(given);
//   }  
// }

// newOne(given);

// ** Still not perfect! What if it's all 9s? Then we need to
// handle an edge case where an additional digit (1) should be
// added at the beginning of the array.

// const given = [9, 9, 9, 9];

// function newOne(given) {
//   let lastDigit = given.length - 1;
//   given[lastDigit] += 1;

//   while (lastDigit >= 0 && given[lastDigit] === 10) {
//     given[lastDigit] = 0;
//     lastDigit -= 1;

//     if (lastDigit >= 0) {
//       given[lastDigit] += 1;
//     } else {
//       // Handle the case where an additional digit is needed at the beginning
//       given.unshift(1);
//     }
//   }

//   console.log(given);
// }

// newOne(given);

///////////////////////////////////////////

/////////// Practice 1 /////////////

const arr = [8,6,7,5,9,9,9];

// function upOne(arr) {
//   const int = Number(arr.join('')) + 1;
//   const backToArray = String(int).split('').map((num) => {
//     return Number(num);
//   });
//   console.log(backToArray);
// }

// upOne(arr);

//////////// Practice 2 /////////////

// const sweetSexy = (arr) => {
//   let i = arr.length - 1;
//   arr[i] += 1;
//   while(i >= 0) {
//     if (arr[i] !== 10) {
//       i--;
//     } else {
//       arr[i] = 0;
//       arr[i - 1] += 1;
//       i--;
//     }
//   }
//   console.log(arr);
// }

// sweetSexy(arr);