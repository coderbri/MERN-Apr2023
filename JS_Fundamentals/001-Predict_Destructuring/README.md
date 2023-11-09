# Predict Destructuring

The **Predict Destructuring** project is designed to illustrate JavaScript destructuring, a feature that allows the extraction of values from objects and arrays and assigns them to variables more efficiently. This project explores various scenarios where destructuring is employed.

## Problem 1

In the first problem, an array called `cars` contains car names. Destructuring is used to retrieve specific elements from the array.

```javascript
const cars = ['Tesla', 'Mercedes', 'Honda']

const [randomCar] = cars; // Retrieves the 1st car only.
const [, otherRandomCar] = cars; // Skips the 1st car and retrieves the 2nd.

console.log(randomCar); // Output: Tesla
console.log(otherRandomCar); // Output: Mercedes
```

## Problem 2

The second problem features an object named `employee` with properties. Destructuring is used to assign the value of a property to a new variable.

```javascript
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
console.log(name); // ! ReferenceError: name is not defined
const { name: otherName } = employee;

console.log(otherName); // Output: Elon
```

## Problem 3

This problem involves an object `person` and a variable `password`. An attempt is made to destructure a non-existent property from the object.

```javascript
const person = {
    full_name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}

const password = '12345';

const { password: hashedPassword } = person;

console.log(password); // Output: 12345
console.log(hashedPassword); // Output: Undefined. `hashedPassword` is not assigned a value.
```

## Problem 4

In the fourth problem, an array `numbers` is destructured to compare values.

```javascript
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];

const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;

console.log(first == second); // Output: false (2 ≠ 5)
console.log(first == third); // Output: true (2 equals 2)
```

## Problem 5

The final problem involves destructuring an object `lastTest` to access its properties and an array.

```javascript
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}

const { key } = lastTest; // Retrieves the value stored in `key`.
const { secondKey } = lastTest; // Retrieves the value array stored in `secondKey`.
const [, willThisWork] = secondKey; // Retrieves the 2nd index of the `secondKey` array.

console.log(key); // Output: value
console.log secondKey; // Output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Output: 1
console.log(willThisWork); // Output: 5
```

---
<p align="right">Completed: ２０２３年１１月０９日（木）</p>