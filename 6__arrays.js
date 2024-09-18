//------------------------------ 09.07.2024 ------------------------------>>

//? Arrays
// syntax : let arr = [];

// let fruits = ["mango", "apple", "banana"];
// console.log(fruits);

//? 1.index number in Array.

// let fruits = ["mango", "apple", "banana"];
// console.log(fruits[2]);
// console.log(fruits["mango"]); // undefined.

//?? 2. Modifying Elements in Arrays.

// let fruits = ["mango", "apple", "banana"];
// fruits[2] = "pineapple";
// console.log(fruits);

//??? 3. forEach Method. // it can't return value.

// let fruits = ["mango", "apple", "banana", "pineapple", "watermelon"];

// fruits.forEach((curElem, index, arr) => {
//   console.log(`${curElem} ${index}`);
// });

//???? 4. Map Method. // it can return value.

// let fruits = ["mango", "apple", "banana", "pineapple", "watermelon"];

// const myMapArr = fruits.map((curElem, index, arr) => {
//   return `my fav fruit is ${curElem}`;
// });

// console.log(myMapArr);
// console.log(fruits);

//------------------------------ 10.07.2024 ------------------------------>>

//  todo Practice Time
// ! write a program to Multiply each element with 2.
// const numbers = [1, 2, 3, 4, 5];
// forEach -  Performs an action on each element
// map -  Creates a new array with transformed elements

// Perform an action on each element.
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((curElem) => {
//   console.log(curElem * 2);
// });

// Creates a "new array" with tranformed elements.
// const num = numbers.map((curElem) => {
//   return curElem * 2;
// });

// console.log(num);

//------------------------------ 11.07.2024 ------------------------------>>_Night

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// 1. Push Method :- add an element in the last of array.
// syntax : arrayname.push(Element);

// fruits.push("guava");
// console.log(fruits.push("guava")); // push() also returns "new length."
// console.log(fruits);

// 2. Pop Method :- This method removes last element of an array.
// syntax : arrayname.pop(Element);

// fruits.pop();
// console.log(fruits.pop()); // pop() also shows "what it was deleted from an array"
// console.log(fruits);

// 3. unshift() Method :- add an element at the begining of the array.
// syntax : arrayname.unshift(Element);


// fruits.unshift("Guava");
// console.log(fruits.unshift("Guava")); // 
// console.log(fruits);


// 4. shift() Method :- remove an element from the begining of an array.
// syntax : arrayname.shift(Element);

// fruits.shift();
// console.log(fruits.shift());
// console.log(fruits);


//------------------------------ 12.07.2024 ------------------------------>>_Morning


//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================
//?---------- The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// syntax : splice(startCount, deleteCount, item1, item2, /* ...,)

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// fruits.splice(1, 1); // start & delete at the same time.
// console.log(fruits);

// fruits.splice(1,2, "Guava"); // here we can also add the another element in the array.
// console.log(fruits);

//! what if you want to add the element at the end
// fruits.splice(-1, 0, "grapes"); 
// fruits.splice(1, 0, "grapes");
// console.log(fruits);


//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - 1.indexOf, 2.lastIndexOf & 3.includes
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//------- 1. indexof method :- it gives you "index number of particular element in an array."
// syntax : arrayname.indexOf(serachElement, fromindex)

// const persons = ["devika", "meena", "sonali", "sita", "sanjana", "prajakta", "sita", "kamukta", "mamta"];

// console.log(persons.indexOf(`meena`)); // to know what is the `index number` of this element.
// console.log(persons.indexOf(`sanjana`, 4)); // if element isn't avaiable after the then it present "-1".
// console.log(`index number of sits is ` + persons.indexOf(`sita`));

//------- 2. lastIndexOf Method :- The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// syntax : aarayname.lastIndexOf(serachElement, fromIndex);


// let result = persons.indexOf("sita");
// console.log(result);

// let result1 = persons.lastIndexOf("sita");
// console.log(result1);

// console.log(persons.lastIndexOf("sita", 5));


//------------------------------ 18.07.2024 ------------------------------>>_Morning


//?------- 3: The includes method checks whether an array includes a certain element, returning true or false. Like "bolean data types".
// Syntax : arrayName.includes();

// const result = persons.includes("meena");
// console.log(result);

// ============================================================
//todo Challenge time
//? 1: Add Dec at the end of an array?
//? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?

// const months = ["Jan", "march", "April", "June", "July"];

// 1:
// months.push("Dec");
// months.splice(months.length, 0, "Dec")
// console.log(months);

// 2:
// When used to add elements, the splice method returns an empty array ([]).

// 3:
// const indexToUpadte = months.indexOf("march");
// months.splice(indexToUpadte, 1, "March")
// console.log(months);

// 4:
// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1);
// console.log(months);

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//?---------- 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found. (It gives the value.)
// Syntax : 

// const result = numbers.find((curElem) => {
//     return curElem > 5;
// });
// console.log(result);


//?---------- 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. (It gives the "index number.")

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.map((curElem) => curElem * 5 );
// console.log(result);


// const result1 = result.findIndex((curElem) => {
//     return curElem > 15;
// });
// console.log(result1);


//*---------- 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? arrayName.filter(() => { })


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result =  numbers.filter((curElem) => {
//     return curElem > 3;
// });
// console.log(result);


// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// const result = numbers.filter((curElem) => {
//     return curElem !== value;
// });

// console.log(result);

// Practice time
// !Example 2: Filtering Products by Price.
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// // Filter products with a price less than or equal to 500.


// const filterProducts = products.filter((curElem) => {
//     return curElem.price <= 500;
// });
// console.log(filterProducts);

//! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let uniqueNumbers = numbers.filter((curElem, index, arr) => {
//     // console.log(curElem);
//     // console.log(arr.indexOf(curElem));
//     return arr.indexOf(curElem) === index;
// });
// console.log(uniqueNumbers);

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

//?---------- Sort Method : it organize the "elements in ascending to descending order."
// Syntax : arrayName.sort();

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// fruits.sort();
// console.log(fruits);


// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];
// numbers.sort();
// console.log(numbers); // it's not working on "number" but here worked for some reasons.

// numbers.sort((a, b) => {
//     if(a>b) return 1;
//     if(b>a) return -1;
// });
// console.log(numbers);

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });

//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });


//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// const squarsOfNumbers = numbers.map((curElem) => curElem*curElem );
// console.log(squarsOfNumbers);

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings 
// .toUpperCase(); & .toLowerCase();
// const words = ["APPLE", "banana", "cherry", "date"];

// const result = words.map((curElem) => {
//     return curElem.toUpperCase();
// });
// console.log(result);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// const squareOfEven = numbers.map((curElem) => {
//     if(curElem % 2 === 0 ) {
//         return curElem * curElem;
//     }
// }).filter((curElem) => curElem !== undefined);

// console.log(squareOfEven);


// sortest way to do.
// const evenSquare = numbers
//   .map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
//   .filter((curElem) => curElem !== undefined);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

// const names = ["ram", "vinod", "laxman"];

// const prefixName = names.map((curElem) => `Mr. ${curElem}`);
// console.log(prefixName);



//?---------- Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

const products = [100, 200, 300, 400, 500];

const totalPrice = products.reduce((accum, curElem) => {
    return accum + curElem;
}, 0);
console.log(totalPrice);


