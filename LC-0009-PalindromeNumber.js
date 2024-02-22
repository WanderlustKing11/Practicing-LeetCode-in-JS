// Palindrome Number
// Given an integer x, return true if x is palindrome integer.
//
// An integer is a palindrome when it reads the same backward as forward.
//
// For example, 121 is a palindrome while 123 is not.


// const x = 12321;

// const palindrome = (x) => {
//   const arr = Array.from(String(x));
//   let [left, right] = [0, arr.length - 1];
//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       console.log(false, "Not a Palindrome!");
//       return false;
//     }
//     left++;
//     right--;   
//   }
//   console.log(true, "Is Palindrome!");
//   return true;
// }

// palindrome(x);

//////////////////////////////////////////////////////

/////////////// practice /////////////////

const coffee = (num) => {
  const arr = Array.from(String(num));
  let [left, right] = [0, arr.length - 1];
  while (left < right) {
    if (arr[left] !== arr[right]) {
      console.log('Not a plalindrome!');
      return false;
    } else {
      left++;
      right--;
    }
  }
  console.log('Is palindrome');
  return true;
}

const num = 123454321;
coffee(num);