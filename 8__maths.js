//------------------------------ 25.07.2024 ------------------------------>>_Night

//* =========================================
//* 1. Math Object in JavaScript
//* =========================================

//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions & 
// Math works with the "number data type" and It doesn't work with BigInt (very big nubmers is called "Bigint").

// i) Constants:
//* - Math.PI: Represents the mathematical constant Pi (π).
// const piValue = Math.PI;
// console.log(piValue);

//* =========================================
//* 2. Basic Operations:
//* =========================================

//----- 2.1: Math.absolute(): The "Math.abs()" static method returns the absolute value of a number.
// or in simple, how far the number is from 0. It will be always positive

// console.log(Math.abs(5));
// console.log(Math.abs(-115));



//----- 2.2: Math.round(x): Rounds a number to the nearest integer.

// const roundedValue = Math.round(3.7);
// console.log(roundedValue);



//----- 2.2: Math.ceil(x): Returns the value of x rounded up to its nearest integer:

// const ceilValue = Math.ceil(3.7);
// console.log(ceilValue);



//----- 2.3: Math.floor(x): Returns the value of x rounded down to its nearest integer.

// const floorValue = Math.floor(3.7);
// console.log(floorValue);

//------------------------------ 26.07.2024 ------------------------------>>_Morning


//----- 2.4: Math.trunc(x): Returns the integer part of x:
// const truncValue = Math.trunc(3.7);
// console.log(truncValue);

//todo Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
// const truncValue = Math.trunc(-3.7);
// const floorValue = Math.floor(-3.1);
// console.log(truncValue);
// console.log(floorValue);

//todo Notes:
// No matter how many chars are there after decimal, they all will always return only number before the decimal.
// round rounds to the nearest integer.
// floor always rounds down.
// ceil always rounds up.

//* =========================================
//* 3. Exponential and Logarithmic Functions:
//* =========================================

//----- 3.1: Math.pow(x, y): Returns the value of x to the power of y.
// console.log(Math.pow(2,4));
// console.log(2 ** 4); // new way found "raise power of a digit."

//----- 3.2: Math.sqrt(): Math.sqrt(x) returns the square root of x:
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot);

//* =========================================
//* Interview Question
//* =========================================

//! Generate Random number
//? Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

console.log(Math.random()); // to generate "random number : 0.6543567"
console.log(Math.random()*100); // to generate "random number : 1-100.6543567" 
console.log((Math.random()*100).toFixed(3)); // to generate "random number : 2.123" with after decimal 3 number.   