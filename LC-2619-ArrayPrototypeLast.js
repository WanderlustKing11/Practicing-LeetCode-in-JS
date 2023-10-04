// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:
// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

// Solution 1:
Array.prototype.last = function() {
  return this.length ? this.slice(-1)[0] : -1;
};

// Solution 2:
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};