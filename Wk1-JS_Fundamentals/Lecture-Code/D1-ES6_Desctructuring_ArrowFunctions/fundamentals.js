// * DATA TYPES

// * String
let myName = "Bri"

// * Number
let myAge = 23;
let pi = 3.14; // float

// * Boolean
let isHuman = true;
let isCat = false;

// * Null
let nothing = null;

// * Undefined
let nothing2;


// * DATA STRUCTURES

// * Arrays (aka List in Py)
let evenNums = [2,4,6,8,10];
let arrOfNames = ['Bri', 'Jane', 'John', 'Kylie']
console.log(evenNums);

// * Objects (aka Dictionary in Py)
let StudentNancy = {
    name: "Nancy",
    role: "Student",
    age: 25
}
console.log(StudentNancy.name); // ? with dot notation: Nancy
console.log(StudentNancy['name']); // ? with bracket notation: Nancy

let employeeAndy = {
    name: "Andy Jones",
    role: "Instructor",
    age: 38,
    isHuman: true,
    favHobbies: ['Playing football', 'Walking the dogs', 'Playing video games'],
    lectureSchedule: {
        week1:{
            day1: "HTML",
            day2: "CSS",
            day3: "CSS: Flex Box"
        },
        week2:{
            day4: "JS - Intro",
            day5: "JS - On the Browser",
            day6: "Belt Prep"
        },
        week3:{
            day7: "Terminal, JS Arrays and Objects",
            day8: "GitHub",
            day9: "APIs"
        },
    }
}
console.log(employeeAndy.lectureSchedule.week2.day4); // JS - Intro
console.log(employeeAndy.favHobbies[1]); // Walking the dogs


// * CONDITIONALS - IF-ELSE STATEMENTS
if (myAge >= 18) {
    console.log("You\'re an adult!");
} else {
    console.log("You are still a child.");
}

const highSchoolGrad = true;
if (highSchoolGrad) {
    console.log("You can enroll in this bootcamp!");
} else {
    console.log("Sorry. You must graduate high school or receive your GED first.");
}

let weekday = "Friday"
if (weekday == "Friday") {
    console.log("Yahoo! The weekend's finally here!");
} else if (weekday == "Saturday") {
    console.log("One more day to relax.");
} else {
    console.log("Time to work...");
}


// * FUNCTIONS
let sayHello = function() {
    console.log("Hello!");
}
function sayHi() {
    console.log("Hello World!");
}

function multiply(num1, num2) {
    return num1 * num2;
}

sayHi()

console.log(multiply(4,6)); // ? Print return statement, since answer isn't logged to terminal
let multipliedResult = multiply(7,11)
console.log(multipliedResult);

// * Arrow Functions (ES6)
let sayHiAgain = () => {
    console.log('Hi Again!');
}
const simplyMultiply = (num1, num2) => num1 * num2;
