// In this exercise, you have to analyze records of temperature to find the closest to zero.

// Write a program that prints the temperature closest to 0 among input data. If two numbers 
// re equally close to zero, positive integer has to be considered closest to zero 
// (for instance, if the temperatures are -5 and 5, then display 5).

// Your program must read the data from the standard input and write the result on the standard output.

// Input
// Line 1: N, the number of temperatures to analyze
// Line 2: A string with the N temperatures expressed as integers ranging from -273 to 5526

// Output
// Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.

// Input Example:
// 5
// 1 -2 -8 4 5
// Expected Output:
// 1

/////////////////////////////////////////////////////////////////////////////

// My solution V1.0

function findClosestToZero(n, inputs) {
    if (n === 0) {
      console.log(0);
      return;
    }
  
    let closestToZero = inputs[0];
  
    for (let i = 1; i < n; i++) {
      let temp = parseInt(inputs[i]);
  
      if (Math.abs(temp) < Math.abs(closestToZero) ||
          (Math.abs(temp) === Math.abs(closestToZero) && temp > closestToZero)) {
        closestToZero = temp;
      }
    }
  
    console.log(closestToZero);
  }
  
  findClosestToZero(n, inputs);


/////////////////////////////////////////////////////////////////////////////

// Codingame's Top Solutions:

// V1.0
// var count = readline(); // the number of temperatures to analyse
// var temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526

// var sortedTemps = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
// printErr(sortedTemps);

// var result = sortedTemps[0] || 0;

// print(result);



// V2.0
// the number of temperatures to analyse
// const x = parseInt(readline());
// // a temperature expressed as an integer ranging from -273 to 5526
// const temps = readline().split(' ').map(Number);
// console.error(temps)

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');
// const p = Math.min(...temps.filter(t => t >= 0));
// const n = - Math.max(...temps.filter(t => t < 0));

// console.log(p <= n ? p : -n);



// V3.0
// const n = parseInt(readline()); // the number of temperatures to analyse
// var inputs = readline().split(' ');
// var result=inputs[0]?inputs[0]:0;
// var absResult=Math.abs(result);
// for (let i = 1; i < n; i++) {
//     const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
//     const absT=Math.abs(t);
//     if(absT<absResult){
//         result=t
//         absResult=absT;
//     }
//     else if(absT==absResult&&t!=result){
//         result=absT;
//         absResult=absT
//     }
// }

// console.log(result);

