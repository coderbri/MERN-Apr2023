// * Global, Function, and Block Scope

// ? The global scope is the scope that contains, and is visible in, all other scopes
var brisName = "coderBri"
console.log(brisName);

// ? Function scope variables are only accessible inside the functino they are declared in (a nested function would have access to variables in the parent function)
const sayHi = () => {
    var newName = "Chrissy"
    console.log('Hi', newName);
}
sayHi()
// ! THIS IS FUNCTION SCOPED : console.log('Hi', newName);

// ? Block scope is a block defined by a set of curly brackets
const logNums = (nums) => {
    for (var idx=0; idx < nums.length; idx++) { // ! Has to be `var` bc `let` and `const` are block-scoped.
        console.log(`the num is ${nums[idx]} at index ${idx}.`);
    }
    console.log('Final Index', idx);
}
logNums([1,2,3,4])

// ? `const` variables CANNOT be changed!
const person = {
    name: "Robert Smith",
    age: 32,
    isMusician: true
}
// const age = person.age
// console.log(age);

// * Destructuring (from an object)
let {name, age} = person
console.log(name, age); // Robert Smith 32

const anotherPerson = {
    name: "Jane Doe",
    age: 27,
    isMusician: false
}
let {name:janedoe, age:age2} = anotherPerson
console.log(janedoe, age2); // Jane Doe 27

// * Destructuring (from an array)
let evenNums = [2,4,6,8,10]
let [num1,,num3] = evenNums // ? `num1,,num3` This expression means that it will extract the first number, skip the second, and extract the third from the array
console.log(num1,num3);
let [,num2,,,num5] = evenNums // ? can skip indexes with commas
console.log(num2,num5);

// * Spread Operator
const yetAnotherPerson = {
    name: "John Smith",
    age: 47,
    hasDog: true
}
let {name:jsmithy, ...restOfTheObject} = yetAnotherPerson // ? Meaning grab the first value of the key "name", and collect the rest of the object
console.log(jsmithy, restOfTheObject); // John Smith { age: 47, hasDog: true }

const updatedPerson = {...yetAnotherPerson, name:"Johnny Test"} // ? Grab everything in that object but change name in this key
console.log(updatedPerson); // { name: 'Johnny Test', age: 47, hasDog: true }

let roster = ['Caden', 'Ben', 'Amy', 'Lindsey']
let [person1, person2, ...everyoneElse] = roster
console.log(everyoneElse); // [ 'Amy', 'Lindsey' ]