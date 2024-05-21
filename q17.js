"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// name array
let guestArray = ["Hassan", "Hussain", "Hashim"];
// cannot make dinner
let cannotAttend = "Hashim";
// invite new guest
let newGuest = "Hashir";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
guestArray.unshift("Hasnain");
let middleGuest = "Hadi";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("Haseeb");
console.log(guestArray);
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    let removeguest = guestArray.pop();
    console.log(`\nSorry ${removeguest} we cant invite you to dinner!`);
}
guestArray.map((item) => console.log(`\n${item} you are still invited to dinner!`));
guestArray.pop();
guestArray.pop();
console.log(guestArray);
