// 1512. Number of Good Pairs 

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Brute Force Approach:

// function numIdenticalPairs(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) count++;
//     }
//   }
//   return count;
// };

// console.log(numIdenticalPairs([1,2,3,1,1,3]));

// Solution #2 - Mapping:

function numIdenticalPairs(nums) {
  let count = {};
  let result = 0;

  for (let num of nums) {
    if (num in count) {
      result += count[num];
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  return result;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));