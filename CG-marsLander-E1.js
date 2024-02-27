// The program must first read the initialization data from 
// standard input. Then, within an infinite loop, the program 
// must read the data from the standard input related to Mars 
// Lander's current state and provide to the standard output 
// the instructions to move Mars Lander.


// Initialization input

// Line 1: the number surfaceN of points used to draw the surface of Mars.
// Next surfaceN lines: a couple of integers landX landY providing the 
// coordinates of a ground point. By linking all the points together in a 
// sequential fashion, you form the surface of Mars which is composed of 
// several segments. For the first point, landX = 0 and for the last point, 
// landX = 6999

// Input for one game turn

// A single line with 7 integers: X, Y, hSpeed, vSpeed, fuel, rotate, power

//    - X,Y are the coordinates of Mars Lander (in meters).
//    - hSpeed and vSpeed are the horizontal and vertical speed of Mars Lander (in m/s). These can be negative depending on the direction of Mars Lander.
//    - fuel is the remaining quantity of fuel in liters. When there is no more fuel, the power of thrusters falls to zero.
//    - rotate is the angle of rotation of Mars Lander expressed in degrees.
//    - power is the thrust power of the landing ship.

// Output for one game turn

// A single line with 2 integers: rotate, power :

//    - rotate is the desired rotation angle for Mars Lander. 
//      Please note that for each turn the actual value of the angle is 
//      limited to the value of the previous turn +/- 15°.
//    - power is the desired thrust power. 0 = off. 4 = maximum power. 
//      Please note that for each turn the value of the actual power is 
//      limited to the value of the previous turn +/- 1.



// Example:


// Initialization input

// 6         	(surfaceN) Surface made of 6 points
// 0    1500    (landX landY)
// 1000 2000	(landX landY)
// 2000 500	    (landX landY) Start of flat ground
// 3500 500	    (landX landY) End of flat ground
// 5000 1500	(landX landY)
// 6999 1000	(landX landY)

// No Output expected
// You can ignore htis but you need to read the values.

// Input for turn 1
// 
// 2500 2500 0 0 500 0 0 	(X Y hSpeed vSpeed fuel rotate power)
// 
// Output for turn 1
// 0 3

// Input for turn 2
//
// 2500 2499 0 -3 499 0 1 	(X Y hSpeed vSpeed fuel rotate power)
//
// Output for turn 2
//
// 0 3

// Input for turn 3
//
// 2500 2495 0 -4 497 0 2 	(X Y hSpeed vSpeed fuel rotate power)
//
// Output for turn 3
//
// 0 2

/////////////////////////////////////////////////////////////////////

// My Solution:

// vSpeed < -39 ? console.log('0 4') : console.log('0 0');


////////////////////////////////////////////////////////////////////

// Other solutions I liked:

// V2.0

// let desiredPower = vSpeed <= -40 ? 4 : 0;

// console.log(`0 ${desiredPower}`);


// V3.0

// if (vSpeed < -30)
    // thrus = 4;
// console.log(angle + ' ' + thrust);



