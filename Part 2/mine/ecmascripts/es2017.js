//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

//? List of new useful features added in ES8  👇
// i. String padding
// ii. Object.values()
// iii. Object.entries()
// iv. Trailing commas in function parameter lists and calls
// v. Async functions

//* =====================
//*  String padding
//* =====================

//? String padding in JavaScript is a way to add extra characters (like spaces) to a string to make it a specific length.

//todo  Use Case: Makes formatting text easier and more predictable, especially for tables, alignments, and UI elements. No more messy, uneven lines disrupting your visual spells!

//? Using padStart() to pad from the beginning:
// const companyName = "Kodyfier";

//? Using padEnd() to pad from the end:

//todo Key points:
//? Both padStart() and padEnd() create a new padded string without modifying the original one.

//? They take two arguments:
//?   - targetLength: The total length of the padded string.
//?   - padString (optional): The string to use for padding (defaults to spaces).

//? If the original string is already longer than or equal to targetLength, it's returned as-is.

//* =====================
//*  trailing commas
//* ====================
//? This feature allows to have trailing commas in function declarations, functions calls, array literal & object literal:


function greet(name, age) {
    console.log(`Hello, my name is ${name} & i'm ${age} years old.`);    
}

greet("Paaliro", 21);

// Object literal

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

//* ======================================
//*  Object.entries() & Object.values()
//* ======================================

//? When iterating over an object's properties, Object.entries() and Object.values() are helpful tools for accessing the keys and values more conveniently.

//* 1. Object.entries()
// The Object.entries() method in JavaScript returns an array of a given object's own enumerable property [key, value] pairs. This is useful when you need to iterate through both the keys and values of an object.

//* Syntax: Object.entries(obj)
//! Note: The object whose [key, value] pairs you want to retrieve.
// Example 1:

// const person = {
//   name: 'John',
//   age: 30
// };

console.log(Object.entries(person));
// Output: [['name', 'John'], ['age', 30]]


//* Example 2: Iterating over an Object
//? You can use Object.entries() in combination with a loop to iterate over an object:

// const car = {
//   brand: 'Toyota',
//   model: 'Camry',
//   year: 2021
// };

// for (const [key, value] of Object.entries(car)) {
//   console.log(`${key}: ${value}`);
// }
// Output:
// brand: Toyota
// model: Camry
// year: 2021


// Example 3: Converting an Object to a Map
//? You can use Object.entries() to convert an object into a Map, which maintains key-value pairs with various methods for manipulation:

// const person = { name: 'Alice', age: 25 };
// const personMap = new Map(Object.entries(person));

// console.log(personMap);
// Output: Map { 'name' => 'Alice', 'age' => 25 }

//* 2. Object.values()
// The Object.values() method returns an array of the object's own enumerable property values. It is helpful when you need only the values, without the keys.

// Syntax: Object.values(obj)
// obj: The object whose property values you want to retrieve.
// Example 1:

// const person = {
//   name: 'John',
//   age: 30
// };

console.log(Object.values(person));
// Output: ['John', 30]

// Example 2: Iterating over Object Values
//? You can iterate over an object’s values directly with Object.values():

const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2021
};

for (const value of Object.values(car)) {
  console.log(value);
}
// Output:
// Toyota
// Camry
// 2021

// Example 3: Using Object.values() with Arrays
//? Since arrays are also objects, you can use Object.values() on them, though it essentially returns the array itself:

const arr = ['apple', 'banana', 'cherry'];
console.log(Object.values(arr));
// Output: ['apple', 'banana', 'cherry']

//* Key Differences Between Object.entries() and Object.values():
// Object.entries() returns an array of key-value pairs ([key, value]).
// Object.values() returns only the values of the object's properties, in an array.
// Example showing the difference:

const person = { name: 'John', age: 30 };

console.log(Object.entries(person));
// Output: [['name', 'John'], ['age', 30]]

console.log(Object.values(person));
// Output: ['John', 30]
// Summary:
// Object.entries(): Best used when you need both keys and values (e.g., iterating through both).
// Object.values(): Best used when you only need the values (e.g., filtering or displaying the data).
// Let me know if you'd like more examples!


//* ======================================
//*  Async Await - Async Functions
//* ======================================

 