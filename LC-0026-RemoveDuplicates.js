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


// V1.0
const nums = [1,1,2,2,2,3,3,4,4,4];
// Expected output: 5, nums = [0,1,2,3,4]

// function removeDuplicate(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
// //   console.log(nums.length + ", nums =", nums)
//   console.log(nums);
// }

// removeDuplicate(nums);

//////////////////////////////////////////////

// V2.0

// Approach:
// Initialize a variable k to 1. This variable will keep 
// track of the count of unique elements in the modified 
// nums array.

// We iterate through the input vector nums starting from 
// the second element (index 1) using a for loop.

// Inside the loop, we compare the current element nums[i] 
// with the previous unique element nums[k - 1]. If they 
// are not equal, it means we have encountered a new 
// unique element. In this case, we update the nums[k] 
// position with the current element to keep it in place. 
// We then increment k to indicate that we have found one 
// more unique element.

// After the loop completes, k contains the count of 
// unique elements, and the first k elements of the nums 
// vector contain the unique elements in the same order 
// they appeared in the input.

// We return the value of k as the final count of unique 
// elements.

// const removeDuplicates = function(nums) {
//   let k = 1; // Initialize the count of unique elements to 1

//    for (let i = 0; i < nums.length - 1; i++) {
//        if (nums[i] !== nums[i+1] ) {
//            nums[k] = nums[i + 1]; // Overwrite the next unique element
//            k++;
//        }
//    }
   
//  return k;
// };

