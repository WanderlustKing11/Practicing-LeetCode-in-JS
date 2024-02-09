// Given a 1-indexed array of integers numbers that is already sorted in 
// non-decreasing order, find two numbers such that they add up to a specific 
// target number. Let these two numbers be numbers[index1] and numbers[index2] 
// where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an 
// integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. 
// You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. 
// We return [1, 2].

// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. 
// We return [1, 3].

// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. 
// We return [1, 2].

// Strategy of two pointers:
// One pointer will be at the beginning, and another pointer at the end.

const numbers = [1,3,4,5,7,10,11];
const target = 9;

// [1][3][4][5][7][10][11]
//  ^                  ^
// 1 + 11 > 9

// When result is too big we decrease by shifting the right pointer.

// [1][3][4][5][7][10][11]
//  ^               ^
// 1 + 10 > 9
// [1][3][4][5][7][10][11]
//  ^           ^
// 1 + 7 < 9

// When result is too small we increase by shifting the left pointer.

// [1][3][4][5][7][10][11]
//     ^        ^
// 3 + 7 > 9
// [1][3][4][5][7][10][11]
//     ^     ^
// 3 + 5 < 9
// [1][3][4][5][7][10][11]
//        ^  ^
// 4 + 4 = 9

function twoSum(numbers, target) {
  let [left, right] = [0, numbers.length - 1];
  while (left < right) {
    let curSum = numbers[left] + numbers[right];
    if (curSum > target) {
      right -= 1;
    } else if (curSum < target) {
      left += 1;
    } else {
      console.log([left + 1, right + 1]);
      break;
    }
  }
  return [left + 1, right + 1]
}

twoSum(numbers, target);


///////////////////////////////////////////////////////////////

//////// Practice /////////

// const nums = [0,5,6,7,8,15,34,79];
             
// const targetNum = 20;

// function sumOfTwo(nums, target) {
//   let leftPointer = 0;
//   let rightPointer = nums.length - 1;
//   while (leftPointer < rightPointer) {
//     let sum = nums[leftPointer] + nums[rightPointer];
//     if (sum > target) {
//       rightPointer -= 1;
//     } else if (sum < target) {
//       leftPointer += 1;
//     } else {
//       console.log([leftPointer + 1, rightPointer + 1]);
//       break;      
//     }
//   }
//   return [leftPointer + 1, rightPointer + 1];
// }

// sumOfTwo(nums, targetNum);