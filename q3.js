"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "hoorain";
// lower case
console.log(personName.toLowerCase());
// upper case
console.log(personName.toUpperCase());
// title case
console.log(personName.charAt(0).toUpperCase() + personName.slice(1, 7));
console.log();
