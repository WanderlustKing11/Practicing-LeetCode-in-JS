// Given an integer array nums, return all the triplets 
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does 
// not matter.


// const nums = [-3,4,55,1,2,-5]
// [-3] [4] [55] [1] [2] [-5]

// Sort: [-5, -3, 1, 2, 4, 55]

// function threeSum(nums) {
//   const ans = [];
//   if (nums.length < 3) return ans;
//   nums.sort((a,b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) break;
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let start = i + 1;
//     let end = nums.length - 1;
//     while (start < end) {
//       const curSum = nums[i] + nums[start] + nums[end];
//       if (curSum > 0) {
//         end -= 1;
//       } else if (curSum < 0) {
//         start += 1;
//       } else {
//         ans.push([nums[i], nums[start], nums[end]]);
//         start += 1;
//         end -= 1;
//         while(start < end && nums[start] === nums[start - 1]) {
//           start += 1;
//         }
//         while(start < end && nums[end] === nums[end + 1]) {
//           end -= 1;
//         }
//         console.log(ans);
//       }
//     }
//     return ans;
//   }
// }

// threeSum(nums);


///////////////////////////////////////////////////////////////////

/////////// V2.0 ///////////

// const nums = [-5, 22, 1, 0, 5, -10, 2, -12, -3];

// const tryAgain = (nums) => {
//   const ans = [];
//   nums.sort((a,b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0 && nums[i] === nums[i - 1]) continue;
//     const target = 0 - nums[i];
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       let currSum = nums[left] + nums[right];
//       if (currSum > target) {
//         right -= 1;
//       } else if (currSum < target) {
//         left += 1;
//       } else {
//         ans.push([nums[i], nums[left], nums[right]]);
//         while(nums[left] === nums[left + 1]) left++;
//         while(nums[right] === nums[right -1]) right--;
//         left++;
//         right--;
//       }
//     }    
//   }
//   console.log(ans);
// }

// tryAgain(nums);


const array = [0, -8, 9, 12, 3, 5, -9, 11, -2, -16];

function superSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let [left, right] = [i + 1, nums.length - 1];
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (target === sum) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (target < sum) {
        right--;
      } else if (target > sum) {
        left++;
      }
    }
  }
  return result;
}

superSum(array);