// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.


// array of integers [nums]
//
// integer target = [nums1, nums2, nums3, nums4] => x + y = target
//
// return = num1 + num2 = target
//
// Must have minimum two inputs for nums
// (in which case they would have to be the answer)
//
// target is also an input

// V1.0 with Redward
// var twoSum = function(nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var k = i; k < nums.length; k++) {
//       if (i !== k) {
//         sum = nums[i] + nums[k];
//         if (sum === target) {
//           return [i, k];
//         }
//       }
//     }
//   }
// }

// // V2.0 - Viisheshjain05
// var twoSum = function(nums, target) {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     // if (nums[i] <= target) {
//     for (let j = i + 1; j <= nums.length - 1; j++) {
//       total = nums[i] + nums[j];
//       if (total == target) {
//         return [i, j];
//       }
//     }
//     // }
//   }
// };

// // V3.0
// function twoSum(nums, target) {
//   var sum = 0;
//   for (var i = 0; i < nums.length; i++) {
//     for (var k = i + 1; k < nums.length; k++) {
//       sum = nums[i] + nums[k];
//       if (sum === target) {
//         return [i, k];
//       }
//     }
//   }
// }

// // v4.0 fastest
// var twoSum = function(nums, target) {
//   let cache = {};

//   for (let i = 0; i < nums.length; i++) {
//     let remaining = target - nums[i];

//     if (cache[nums[i]] !== undefined) {
//       return [cache[nums[i]], i];
//     }

//     cache[remaining] = i;
//   }
// };

// ** Note ** Because cache is an object, I tried
// using dot notation, but the property names (keys)
// are determined dynamically during runtime (the
// values of 'remaining' and 'nums[i]'). Since these
// keys are numbers and are stored in variables, we 
// have to use bracket notation.

// For example, we cannot replace `cache[remaining] = i;`
// with `cache.remaining = i;` because the latter
// literally set a property named "remaining" on the
// object, not a property whose name is the value of
// the `remaining` variable.

// // V5.0 HashMap (The exact same as V4.0, but with
// // the use of 'in' keyword)

// var twoSum = function(nums, target) {
//   const hashMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     if (diff in hashMap) {
//       return [hashMap[diff], i]
//     }
//     hashMap[nums[i]] = i
//   }
// }


/////////////////////////////////////////////////

/////////// Practice ///////////////

const nums = [3, 5, 22, 10];
const target = 15;


function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const secondNum = target - nums[i];
    if (map[secondNum] !== undefined) {
      console.log([map[secondNum], i]);
    }
    map[nums[i]] = i;
  }
}

twoSum(nums, target);