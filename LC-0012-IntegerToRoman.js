// Given an integer, convert it to a roman numeral.

// function intToRoman(num) {
//   if (num < 1 || num > 3999) {
//     return "Invalid input";
//   }

//   const romNumsList = {
//     1000: "M",
//     900: "CM",
//     500: "D",
//     400: "CD",
//     100: "C",
//     90: "XC",
//     50: "L",
//     40: "XL",
//     10: "X",
//     9: "IX",
//     5: "V",
//     4: "IV",
//     1: "I"
//   };

//   let romanNum = ""; 
  
//   // iterate through given number in reverse order
//   for (let value of Object.keys(romNumsList).map(Number).sort((a, b) => b - a)) {
//     while (num >= value) {
//       romanNum += romNumsList[value];
//       num -= value; 
//     }
//   }

//   return romanNum;  
// };

// console.log(intToRoman(123));

// function intToRoman(num) {
//   if (num < 1 || num > 3999) {
//     return "Invalid input";
//   }

//   const romNumsList = [
//     { value: 1000, symbol: "M" },
//     { value: 900, symbol: "CM" },
//     { value: 500, symbol: "D" },
//     { value: 400, symbol: "CD" },
//     { value: 100, symbol: "C" },
//     { value: 90, symbol: "XC" },
//     { value: 50, symbol: "L" },
//     { value: 40, symbol: "XL" },
//     { value: 10, symbol: "X" },
//     { value: 9, symbol: "IX" },
//     { value: 5, symbol: "V" },
//     { value: 4, symbol: "IV" },
//     { value: 1, symbol: "I" }
//   ];

//   let romanNum = "";
//   // Find the largest symbol that is less than or equal to 'num'
//   // Append that symbol and subtract its value from 'num'
//   // Continue this process until 'num' becomes 0
//   for (let i = 0; i < romNumsList.length; i++) {
//     while (num >= romNumsList[i].value) {
//       romanNum += romNumsList[i].symbol;
//       num -= romNumsList[i].value;
//     }
//   }

//   return romanNum;
// }

// console.log(intToRoman(94));

// from xdxp
// function intToRoman(num: number): string {
//   const rNums: Record<string,number> = {
  const intToRoman = (num) => {
    const romanNums = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  };
  let result = '';
  for(let rN in romanNums){
      let count = num / romanNums[rN];
      if(count>0) {
          result+= rN.repeat(count);
          num = num % romanNums[rN];
      }
  }
  return result;
};

console.log(intToRoman(123));