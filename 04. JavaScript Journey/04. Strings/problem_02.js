//String Methods: includes(), startsWith(), endsWith()   ---> These methods are used to check the presence or position of text inside a string. They return true or false.

// 1. includes()   --->   Checks whether a string contains a given substring.   ---> Syntax = string.includes(searchValue, startIndex)

let text1 = "JavaScript is awesome";

console.log(text1.includes("JavaScript")); // true
console.log(text1.includes("awesome"));    // true
console.log(text1.includes("python"));     // false

// 2. startsWith()   --->   Checks whether a string begins with a given substring.   --->   Syntax = string.startsWith(searchValue, startIndex)

let text2 = "JavaScript is awesome";

console.log(text2.startsWith("JavaScript")); // true
console.log(text2.startsWith("is"));         // false

// 3. endsWith()   --->   Checks whether a string ends with a given substring.   --->   Syntax = string.endsWith(searchValue, length)

let text3 = "JavaScript is awesome";

console.log(text3.endsWith("awesome")); // true
console.log(text3.endsWith("Script"));  // false