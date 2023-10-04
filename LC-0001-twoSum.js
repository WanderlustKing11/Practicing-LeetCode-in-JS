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
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var k = i; k < nums.length; k++) {
      if (i !== k) {
        sum = nums[i] + nums[k];
        if (sum === target) {
          return [i, k];
        }
      }
    }
  }
}

// V2.0 - Viisheshjain05
var twoSum = function(nums, target) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] <= target) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      total = nums[i] + nums[j];
      if (total == target) {
        return [i, j];
      }
    }
    // }
  }
};

// V3.0
function twoSum(nums, target) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var k = i + 1; k < nums.length; k++) {
      sum = nums[i] + nums[k];
      if (sum === target) {
        return [i, k];
      }
    }
  }
}

// v4.0 fastest
var twoSum = function(nums, target) {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];

    if (cache[nums[i]] !== undefined) {
      return [cache[nums[i]], i];
    }

    cache[remaining] = i;
  }
};

// V5.0 HashMap
var twoSum = function(nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in hashMap) {
      return [hashMap[diff], i]
    }
    hashMap[nums[i]] = i
  }
}
