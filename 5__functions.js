//------------------------------ 29.06.2024 ------------------------------>>

// ***** Funtions ***** //

//  3 students at a same time wants to find the sum of two numbers.

// // 1st student
// var a=5, 
// b=10;
// var sum1 = a + b;
// console.log(sum1);

// // 2st student
// var a=5, 
// b=15;
// var sum2 = a + b;
// console.log(sum2);

// // 3rd student
// var a=10, 
// b=15;
// var sum3 = a + b;
// console.log(sum3);

// // let's make a reusable code.

// function sum(a, b){
//     return a + b;
// }

// console.log(sum(5, 5));
// console.log(sum(15, 15));
// console.log(sum(2, 4));


// ************************************ Types of Funtions ****************************** //
// 1.***** Function Declaration

// function greet(){
//     console.log("Hi, it's me Parveen, one of the best developer in india.");
// }
 



// 2.***** Devocation the function (Call the Function)

// greet();


// Practice 

// function greet(name) {
//     console.log("Hello " + name + " Welcome to the Reliance Digital.");
// }

// greet("Parveen,");
// greet("Mukund,");




// 5.***** Function Expression

// var ex = function greet(){
//     console.log("Hello, World");
// }

// ex();

//------------------------------ 29.06.2024 ------------------------------>>


// 1. Write a function to find the sum of two numbers with parameters.

// function sum(a, b){
//     console.log(a + b);
// }

// sum(5, 1);



// var result = function sum(a, b){
//     console.log(a + b);
// };

// result(10, 5656);


//------------------------------ 02.07.2024 ------------------------------>>

// 7.***** Return Keyword

// function sum(a, b){
//     console.log(a + b);
//     return a + b;
// }
// var result = sum(5, 10);
// console.log("cosole",result);
// // raa(5, 6);




// 8.***** IIFE ( Immediealy )

// function (a, b) {
//     console.log(a + b);
// }