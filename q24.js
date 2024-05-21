"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Equality and Inequality Test 1
console.log("Equality test with strings: ", "Mango" === "Mango");
// Equality and Inequality Test 2
console.log("Inequality test with strings: ", "Mango" != "Orange");
// Tests using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality
console.log("Equality test with numbers: ", 30 === 30);
// Numerical tests involving Inequality
console.log("Inequality test with numbers: ", 30 != 35);
// Greater then Test
console.log("Greater then Test: ", 20 > 10);
// Less then Test
console.log("Less then Test: ", 10 < 20);
// Greater then or equal to
console.log("Greater then and equal to test: ", 20 >= 20);
// less then or equal to
console.log("less then and equal to test: ", 10 <= 20);
// Tests using "And" operator
console.log("And Operator Test: ", 20 === 20 && 30 > 20);
// Tests using "Or" operator
console.log("Or Operator Test: ", 20 === 20 || false);
// Test whether an item is in array
const vegetables = ["Onion", "Potato", "Reddish"];
console.log('Testing "Potato" in array: ', vegetables.includes("Potato"));
// // Test whether an item is not in array
console.log('Testing "Brinjal" is not in array: ', !vegetables.includes("Brinjal"));
