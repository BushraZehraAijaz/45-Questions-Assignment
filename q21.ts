// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Data type of person object
interface person {
    name : string,
    age : number,
    nationality : string,
    student : boolean
}

// person object
let person: person = {
    name : 'Askari',
    age : 25,
    nationality : 'Pakistani',
    student : true
}

// print person
console.log(person);

// Data type of car object
interface car {
    maker : string,
    color : string,
    model : number,
    automatic : boolean
}
// car object
let car = {
    maker : 'Toyota',
    color : 'black',
    model : '2020',
    automatic : true
}
console.log(car);