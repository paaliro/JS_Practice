//*============================================= 01.09.2024 =============================================

//! Question 2 : Write a function to calculate the difference in days between two given dates.

// const getDaysDifference = (d1, d2) => {
//   let oneDay = 24 * 60 * 60 * 1000;
//   let diff = Math.abs(d2 - d1); //* Math.abs : it is used for "value will never come in minus(-)."
//   return Math.round(diff / oneDay); //* Math.round : it is used for output comes in round figures.
// };

// // Example usage:
// const date1 = new Date("2024-02-19");
// const date2 = new Date("2024-03-01");
// console.log(getDaysDifference(date1, date2)); //* Output - 11 (difference in days).

//*============================================= 01.09.2024 =============================================

//* =========================================
//*  Timing Based Events in JavaScript
//* =========================================

//* 1. setTimeout:
//? The setTimeout function is used to execute a function or code block after a specified delay in milliseconds.

//* 1st Method.
// function delayedFunction(x) {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds).", x);
// }

// setTimeout(delayedFunction, 2000);
// setTimeout(() => delayedFunction(5), 2000);

//* 2nd Method.
// const delayedFunction = () => {
//     console.log("This function was delayed by 2000 milliseconds (2 seconds).");
// }
// delayedFunction();

// setTimeout(delayedFunction, 2000);

//* 2. setInterval:
//? The setInterval function is used to repeatedly execute a function or code block at a specified interval in milliseconds.

//? ex- mind game of counting seconds on mind and after every 5secs we need to draw a straight line on paper.
// and it will continue till I told you to stop

//* Method
// function repeatedFunction() {
//     console.log("This function will be repeated every 1000 milliseconds (1 second.)");
// }

// setTimeout(repeatedFunction, 1000);

//* 3. Clearing Timeout with clearTimeout:
//? If you want to cancel a scheduled timeout before it occurs, you can use the clearTimeout function.

//? The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

// Syntax:
//* clearTimeout(timeoutID);

// function delayedFunction() {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds).");
// }
// const myWork = setTimeout(delayedFunction, 2000);
// clearTimeout(myWork);
//todo Cancel the timeout before it occurs.

//* 4. Clearing Interval with clearInterval:
//? If you want to cancel a scheduled interval before it occurs, you can use the clearInterval function.

//? The global clearInterval() method cancels a timeout previously established by calling setInterval().

// Syntax:
// clearInterval(intervalID);

// function repeatedFunction() {
//   console.log("This function repeats every 1000 milliseconds (1 second).");
// }

// const intervalID = setInterval(repeatedFunction, 1000);

// clearInterval(intervalID);

//todo Cancel the interval

//*============================================= 07.09.2024 =============================================

//* =========================================
//*  Challenge Time
//* =========================================

//! Write a JavaScript program that defines a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds (1 second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds.  Additionally, after 5 seconds have elapsed, use setTimeout() to clear the interval previously set up. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.

const repeatedFunction = () => {
  console.log("This function repeats every 100 milliseconds (1 Second).");
};
repeatedFunction();
const intervalID = setInterval(repeatedFunction, 1000);

setTimeout(() => {
  clearInterval(intervalID)
}, 5000);

//*============================================= 14.09.2024 =============================================

