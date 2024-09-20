//* =========================================
//*    ECMAScript Features (2020) / ES11
//* =========================================

//? List of new useful features added in ES8  👇
// i. BigInt
// ii. Nullish Coalescing Operator ??
// iii. Optional Chaining Operator ?.
// iv. promise.allSettled 

//* ================
//* i. BigInt
//* ================
//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers.

//? Creating BigInts:
//? - Using the `n` suffix:

// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);
// console.log(typeof anotherLargeNumber);

// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// console.log(maxNumber); // Output: 9007199254740991 if increase a single number more then this value then it will not work properly.

// let num = maxNumber + 11n;
// console.log(num);


//* ===================================
//* ii. Nullish Coalescing Operator ??
//* ===================================
//? In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand.

// let favNum = 0; // falsy
// // userFavNum = favNum || 10;

//* =====================================
//* iii. Optional Chaining Operator (?.)
//* =====================================
//? It provides a concise way to access properties of an object without worrying about the existence of intermediate properties. It's particularly useful when working with nested objects or accessing properties of objects that may be null or undefined.
// const person = {
//   name: "John",
//   address: {
//     city: "New York",
//     zipCode: 12345,
//   },
// };

//? Accessing nested properties without optional chaining
// const city = person.address;
// const city = person.address ? person.address.city : "City isn't mention.";
// console.log(city);

//? with optional chaining
// const city = person.address ?.city ?? "City isn't mention.";
// console.log(city);


//? One more example
// The optional chaining operator can be chained multiple times to access deeply nested properties:

const person = {
    name: "John",
    address: {
      city: "New York",
      zipCode: 12345,
      coordinates: {
        latitude: 40.132,
        longitude: 32.2123,
      }
    },
  };

  const latitude = person.address?.coordinates?.latitude ?? "Not Present."
  console.log(latitude);
  

//* ===================================
//* iv. Promise.allSettled()
//* ===================================
//? We will cover later in our Promises section part of the video and you gonna love that part.
 