// name array
let guestArray: string[] = ["Hassan", "Hussain", "Hashim"];

// cannot make dinner
let cannotAttend: string = "Hashim";

// invite new guest
let newGuest: string = "Hashir";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;

console.log("Welcome all, we found a bigger table!");

guestArray.unshift("Hasnain");
console.log(guestArray);

let middleGuest:string = "Hadi"
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);

console.log(guestArray);

guestArray.push("Haseeb");
console.log(guestArray);

guestArray.map((item)=> console.log(`\nDear ${item} You are invited to dinner!`))