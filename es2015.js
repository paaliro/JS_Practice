//------------------------------ 07.07.2024 ------------------------------>>
// ES6 (ES2015)

// use of "LET" & "CONST"

// difference between "let" & "var"

// let
// if (true) {
//   var name = "parveen";
//   console.log(name);
// }

// console.log(name);

//------------------------------ 08.07.2024 ------------------------------>>

// i. Template Strings ES6 ``

// let firstName = "Parveen";
// let lastName = "Kumar";
// // let fullName = firstName + lastName

// // console.log(fullname);

// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// let num = 1;
// console.log(`5 * ${num} = ${5 * num}`);

// let age = 5;
// let message = `His son's ${age} old.`;

// console.log(message);

//------------------------------ 09.07.2024 ------------------------------>>

//------------ Multiline String

// let sent = `this is multiline string.
// and here we can add multiline in a single string.`;
// console.log(sent);

//------------ Default Parameters

// function sum(a, b = 5) {
//   return a + b;
// }
// console.log(sum(4, 2));

//------------ Fat Arrow Function

// Example.
// function sum(a, b) {
//   let result = `The sum of ${a} & ${b} is ${a + b}.`;
//   console.log(result);
// }

// sum(5, 100);

// const sum = (a, b) => { // => is "fatt arrow"
//     let result = `The sum of ${a} & ${b} is ${a + b}.`;
//     console.log(result);
//   }

//   sum(5, 100);

// const sum = (a, b) => console.log(`The sum of ${a} & ${b} is ${a + b}.`);
// sum(5, 4);

// //?🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 5));

// //? 🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = (a) => `The square of ${a} is  ${a * a}`;
// console.log(square(5));

// //? 🚀 3: If there are no parameters, use an empty set of parentheses ().
// const greet = () => console.log("Plz LIKE SHARE & SUBSCRIBE!");
// greet();

//? Caculator Function

// console.log(calculator(2, 4, '+')); output : 6

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      if (num2 === 0) {
        return "0 isn't allowed";
      } else {
        return num1 / num2;
      }

    default:
      return "Operator Not Found.";
  }
}

console.log(calculator(2, 0, "*"));
