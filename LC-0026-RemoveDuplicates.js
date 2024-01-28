// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing 
// order, remove the duplicates in-place such that each 
// unique element appears only once. The relative order 
// of the elements should be kept the same. Then return 
// the number of unique elements in nums.

// Example:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: The function should reeturn k = 2, with 
// the first two elements of nums being 1 and 2
// respectively.

const nums = [1,1,2,2,2,3,3,4,4,4];
// Expected output: 5, nums = [0,1,2,3,4]

function removeDuplicate(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
//   console.log(nums.length + ", nums =", nums)
  console.log(nums);
}

removeDuplicate(nums);

//////////////////////////////////////////////
