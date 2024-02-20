// Given an integer array nums of length n and an integer target, 
// find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).


// function closestNumber(nums, target) {
//   nums.sort((a, b) => a - b);
//   let closest = nums[0] + nums[1] + nums[nums.length - 1];
//   let closestValues = [nums[0], nums[1], nums[nums.length - 1]];

//   for (let i = 0; i < nums.length - 2; i++) {
//     let left = i + 1, right = nums.length - 1;
    
//     while (left < right) {
//       let sum = nums[i] + nums[left] + nums[right];
//       let currDiff = Math.abs(sum - target);

//       if (currDiff < Math.abs(closest - target)) {
//         closest = sum;
//         closestValues = [nums[i], nums[left], nums[right]];
//       }

//       if (sum < target) {
//         left++;
//       } else if (sum > target) {
//         right--;
//       } else {
//         // If sum exactly matchest the target, we've found the closest possible sum.
//         console.log('Found the exact match:' + sum + ";", "Values:", [nums[i], nums[left], nums[right]]);
//         return sum;
//       }
//   }
// }
//   console.log("The closest sum is " + closest + ";", "Values:", closestValues);
//   return closest;
// }

// const nums = [-34, -32, -31, -16, -13, -11, -7, -4, 20, 24, 29, 40, 47];
// const target = 59;
// closestNumber(nums, target);

///////////////////////////////////////////////////////////////

// LeetCode answer:
// function closestNumber(nums, target) {
//     nums.sort((a, b) => a - b);
//     let closest = nums[0] + nums[1] + nums[nums.length - 1];
//     for (let i = 0; i < nums.length - 2; i++) {
//       let left = i + 1, right = nums.length - 1;      
//       while (left < right) {
//         let sum = nums[i] + nums[left] + nums[right];
//         let currDiff = Math.abs(sum - target);  
//         if (currDiff < Math.abs(closest - target)) {
//           closest = sum;
//         }  
//         if (sum < target) {
//           left++;
//         } else if (sum > target) {
//           right--;
//         } else {
//           return sum;
//         }
//     }
//   }
//     return closest;
//   }



///////////////////////////////////////////////////////////////////////////

/////////// Practice //////////////////

// sudo in 3 min
// 1. the end result is a variable that holds the closest sum of 3 numbers
// 2. sort the array
// 3. for loop
// 4. define left and right pointers
// 5. while loop
// 6. define sum of three numbers
// 7. define the difference between the target and sum (Math.abs(sum - target))
// 8. 

const theClosest3 = (nums, target) => {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[nums.length - 1];
  let closestValues = nums[0] + nums[1] + nums[nums.length - 1];
  
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(sum - target);

      if (diff < Math.abs(closest - target)) {
        closest = sum;
        closestValues = [nums[i], nums[left], nums[right]];
      };
      
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else if (sum === target) {
        console.log("Found exact match: " + sum);
      }
    }
  }
  console.log("Closest sum is " + closest, "Values: " + closestValues)
}

const nums = [-34, -32, -31, -16, -13, -11, -7, -4, 20, 24, 29, 40, 47];
const target = 59;
theClosest3(nums, target);