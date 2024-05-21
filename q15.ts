// name array
let guestArray:string[] = ["Hassan","Hussain","Hashim"];

guestArray.map((items)=> console.log(`Hey,${items} you are invited to dinner`));

// cannot make dinner
let cannotAttend:string = "Hashim";
console.log(`${cannotAttend} cannot make it, for dinner`);

// invite new guest
let newGuest :string = "Hashir";
guestArray[guestArray.indexOf(cannotAttend)]=newGuest;
console.log(guestArray);

guestArray.map((items)=> console.log(`Hey,${items} you are invited to dinner`));
