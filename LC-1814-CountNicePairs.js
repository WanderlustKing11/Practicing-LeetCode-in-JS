// 1814. Count Nice Pairs in an Array (Medium)

// You are given an array `nums` that consists of non-negative integers.
// Let us define rev(x) as the reverse of the non-negative integer x. For
// example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) 
// is nice if it satisfies all of the following conditions:

// 0 < i < j < nums.length

// nums[i] + rev(nums[j]) === nums[j] + rev(nums[i])

// Return the number of nice pairs of indices. Since that number can be 
// too large, return it modulo 109 + 7.

// Example:

// Input:
// nums = [42,11,1,97]

// Output: 2

// Explanation: The two pairs are:
// (0, 3) : 42 + rev(97) = 42 + 79 = 121;  97 + rev(42) = 97 + 24 = 121;
// (1, 2) : 11 + rev(1) = 11 + 1 = 12;  1 + rev(11) = 1 + 11 = 12;


// Example 2:

// Input nums = [13,10,35,24,76];
// Output: 4

/////////////////////////////////////////////////////////////////////////

// Solution:

// const countNicePairs = (nums: number[]): number => {       // ... If we were using TypeScript
const countNicePairs = (nums) => {
  let nicePair = 0;
  let map = new Map();
  const rev = (num) => parseInt(num.toString().split('').reverse().join(''));
  for (let i = 0; i < nums.length; i++) {
    let diff = nums[i] - rev(nums[i]);
    let increment = map.get(diff) || 0;
    nicePair = (nicePair + increment) % 1000000007;
    map.set(diff, increment + 1);
  }
  console.log(nicePair);
}

const input = [13,10,35,24,76];
countNicePairs(input);