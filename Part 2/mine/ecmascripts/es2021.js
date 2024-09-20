//* ==========================================
//*    ECMAScript Features (2021) / ES12
//* =========================================

//? List of new useful features added in ES8  👇
// i. String.prototype.replaceAll()
// ii. Logical Assignment Operators (||=, &&=, ??=)
// iii. Numeric Separators
// iv. Promise.any()

//* ==========================================
//* i. String.prototype.replaceAll()
//* =========================================
//? replaceAll in JavaScript is a function that replaces all occurrences of a specified value with another value in a given string.

//? Replacing all occurrences of a word:
//! syntax : .replaceAll()
// const originalString = "Hello, world! Hello again.";
// const newStr = originalString.replaceAll("Hello","Hi");
// console.log(newStr);


//? Replacing multiple spaces with a single space:
//! syntax : .replaceAll()
const text = "This   has   extra       spaces.";
const newText = text.replaceAll(/\s+/g, " ")
console.log(newText);


//* =====================================================
//*  ii. Logical Assignment Operators (||=, &&=, ??=)
//* ====================================================

//? Logical OR-Assignment (||=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a falsy value (false, null, undefined, 0, '', NaN). Otherwise, it leaves the left-hand operand unchanged.

//? Logical AND-Assignment (&&=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a truthy value. Otherwise, it leaves the left-hand operand unchanged.

//* ======================
//* iii. Numeric Separators
//* ====================
//? This feature allows underscores (_) to be used as separators within numeric literals to improve readability.

//* ======================
//* iv. Promise.any()
//* ====================
//? Promise.any(): This method takes an iterable of Promise objects and returns a single Promise that resolves as soon as any of the input Promises fulfill.

const promise1 = new Promise((resolve, reject) =>
    setTimeout(resolve, 200, "Promise 1")
  );
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "Promise 2")
  );
  const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 300, "Promise 3")
  );
  
  Promise.any([promise1, promise2, promise3]).then((value) => console.log(value));
  
  //? Difference: while Promise.race() does indeed consider both fulfilled and rejected Promises, Promise.any() only looks for fulfillment among the input Promises. If all input Promises are rejected, Promise.any() will reject with an AggregateError containing all the rejection reasons.
  