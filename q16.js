// name array
var guestArray = ["Hassan", "Hussain", "Hashim"];
// cannot make dinner
var cannotAttend = "Hashim";
// invite new guest
var newGuest = "Hashir";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log("Welcome all, we found a bigger table!");
guestArray.unshift("Hasnain");
console.log(guestArray);
var middleGuest = "Hadi";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
guestArray.push("Haseeb");
console.log(guestArray);
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " You are invited to dinner!")); });
