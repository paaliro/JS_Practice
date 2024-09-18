//------------------------------ 18.07.2024 ------------------------------>>_Morning

//* =========================================
//* String in JavaScript
//* =========================================

//---------> what we will cover
// 1.String & it's properties, 
// 2.Escape Character,
// 3.String Search Methods,
// 4.Extracting String Parts,
// 5.Extracting String Characters,
// 6.Replacing String Content,
// 7.Other Useful Methods

//====== 1.String & it's properties, ======
// Strings in JavaScript are a fundamental data type that represents a sequence of characters.
// Note : i. Strings created with single or double quotes works the same.  
// ii. There is no difference between the two.

//1.1 String Properties:
// Length Property that returns the length of the string (number of characters).

// const str = "Hello,    World!"; //including space n all 
// console.log(str.length); 


//* =========================================
//* 2. Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash


// let str = "My name is `parveen kumar`."
// console.log(str);

// let str = `My name is "parveen kumar".`
// console.log(str);

// let str = "Hey, it's me Parveen. May i know you `Name ?` & \n you look so \"beautiful.\"" // "\n" used for new line start.
// console.log(str);


//* =========================================
//* 3. String Search Methods
//* =========================================
//----- 3.1 : indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// syntax : i. arrayName.indexOf(searchString), 
// ii. arrayName.indexOf(searchString, position)


// let str = "Parveen Kumar";
// // console.log(str.indexOf("Kumar"));

// // Array.from() method used to convert a "string into an `array.`"

// let strArr = Array.from(str)
// // console.log(strArr);

// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);

//----- 3.2 : lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let textArr = Array.from(text);
// console.log(textArr);
// let textMap = textArr.map((curElem, index) => `${curElem} - ${index}`)
// console.log(textMap);

// console.log(text.lastIndexOf("JavaScript"));

//------------------------------ 19.07.2024 ------------------------------>>_Morning

//----- 3.3 : search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let Result = text.search(/Javascript/i);  // (/Javascript/) regular expressions. | "i" flag use for takel caseSecsitive property &  "g" flag use for global search.
// console.log(Result);

//*👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value

//----- 3.4 : match(): Returns an array of the matched values or "null" if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // let result = text.match("JavaScript");
// // console.log(result);
// //todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
// let result = text.match(/Javascript/gi);
// console.log(result);

//----- 3.5 : matchAll(): Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchResult = text.matchAll("Javascript");
// console.log(matchResult);
//Note : here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the "g" flag at the end.

// let matchResult = text.matchAll("JavaScript"); 
// // console.log(...matchResult); // Spread Operator "..." : Use to see the output in _matchAll.()_ property.

// for(let item of matchResult){
//     console.log(item[0]);
// }

//----- 3.6 : includes(): Returns "true" if the string contains the specified value, and "false" otherwise.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // Note: includes() is case sensitive. includes() is an ES6 feature.
// let resultInclules = text.includes("JavaScript");
// console.log(resultInclules);


//----- 3.7 : startsWith(): The startsWith() method returns "true" if a string begins with a specified value.Otherwise it returns "false".

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // let resultStartsWith = text.startsWith("Helcome");
// let resultStartsWith = text.startsWith("Hello");
// console.log(resultStartsWith);


//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);
// console.log(result);

//-------- 3.8 : endsWith(): The endsWith() method returns "true" if a string ends with a specified value. Otherwise it returns "false".

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");
// let result = text.endsWith("course");
// console.log(result);

//* =========================================
//* 4. Extracting String Parts:
//* =========================================

//? String.prototype.substr() it is deprecated  ❌ (it's old method, that's why we can't use it now.)

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax : slice(start, end);
// 1. Javascript counts postions from zero. & 
// 2. slice() extracts up to but "not including `indexEnd.`"

//-> Note : JavaScript counts positions from zero. First position is 0. Second position is 1.

// let text = "Hello Sir, i hope you're well.";
// // let result = text.slice(6);
// let result = text.slice(6, 15);
// console.log(result);

//------------------------------ 23.07.2024 ------------------------------>>_Evening

// -----> 4.1 : substring() 
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
//=====a: substring: Extracts a portion of the string based on starting and ending indices.
// 1. Javascript counts postions from zero. & 
// 2. slice() extracts up to but "not including `indexEnd.`"


// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

// Note : substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Volvo is the safest cars in the world.";
// // let sSring = text.substring(1, 9);
// let sSring = text.slice(-8); // OP: e world.
// console.log(sSring);

// -----> 4.2 : replace(); -> it's used for "replace a word to anothter word."
// Syntax : arrayName.replace(targetword, toreplaceword);

// let text = "Volvo is the safest cars in the world.";
// let wordReplace = text.replace("v", "D");
// console.log(wordReplace);

// -----> 4.3 : replaceAll(); -> it's used for "replace all similar words to anothter word."
// Syntax : arrayName.replace(targetword, toReplaceWord);

// let text = "Volvo is the safest cars in the world and Volvo Was the First Company to Use Laminated Windshields";
// let wordReplaceAll = text.replaceAll("Volvo", "BMW");
// console.log(wordReplaceAll);

//* =========================================
//* Interview Question
//* =========================================
//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "Vinod");
// let result = text.replaceAll("JavaScript", "Vinod");

// console.log(result);

//* =========================================
//* 5. Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? 5.1 : The charAt(position) Method
//? 5.2 : The charCodeAt(position) Method
//? 5.3 : The at(position) Method

//-----> 5.1 : The charAt(position) Method
//charAT() : The charAt() method returns the character at a specified index (position) in a string.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(5);
// console.log(result);


//-----> 5.2 : The charCodeAt(position) Method
// charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // Note : charCode of "A" & charCode of "a" is different. 
// let result = text.charCodeAt(6);
// console.log(result);


//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as charAt().

// let text = "Hello JavaScript, welcome to our world best JavaScript course.";
// let result = text.at(-6);
// console.log(result);


//* =========================================
//* 6.Replacing String Content:
//* =========================================
//! Replacing String Content : The replace method is used to replace a specified value with another value.
// Syntax : arrayName.replace(targetword, toreplaceword);

// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

// Note : Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.

// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/ig, "vinod");
// console.log(replacedString);


//------------------------------ 24.07.2024 ------------------------------>>_Evening

//* =========================================
//* 7. Other Useful Methods:
//* =========================================

//! Other Useful Methods: 
//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

// Note :- split: Splits the string into an array of substrings based on a specified delimiter.
// const str = "apple,orange,banana"; 
// let strArr = str.split(",").reverse().join(); // join() : it's used for to convert an array into "string."
// console.log(strArr); 


//* =========================================
//* //! Interview Questions
//* =========================================

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("a".charCodeAt("0"));
// console.log("z".charCodeAt("0"));

// for(let char = 97; char <= 122; char++ ) {
//     console.log(String.fromCharCode(char));
// }

//! 2: Write a function to count the number of vowels in a string?
//! 3: Write a function to check if all the vowels presents in a string or not?

//! 4: Write a JavaScript function to check if the given sting is Pangram or not?
