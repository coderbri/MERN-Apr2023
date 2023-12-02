# D6: Functional Programming: Higher Order Functions and Callbacks

<div style="display: flex; justify-content: space-between;">
    <p>Week 2 Session 3</p>
    <p>２０２３年１２月０１日（金）</p>
</div>

### Table of Contents

- [Introduction](#introduction)
- [Higher Order Functions (HOF)](#higher-order-functions-hof)
- [Callback Functions](#callback-functions)
- [Practical Use Cases](#practical-use-cases)


## Introduction
Higher Order Functions (HOF) and Callbacks are fundamental concepts in JavaScript that enhance the flexibility and maintainability of your code. They play a crucial role in functional programming paradigms and are widely used in real-life projects.

### Higher Order Functions (HOF)
A Higher Order Function is a function that takes one or more functions as arguments or returns a function as its result. It allows for more dynamic and reusable code.

#### Example:
```javascript
const squareNums = (num) => {
    return num * num;
};

const manipulateArray = (arr, instructions) => {
    let output = [];
    for (let index = 0; index < arr.length; index++) {
        output.push(instructions(arr[index]));
    }
    return output;
};

const multiplyElementBy2 = (val) => val * 2;
const divideElementBy2 = (val) => val / 2;

const result = manipulateArray([12, 24, 36], divideElementBy2);
console.log(result);
```

### Callback Functions
A Callback Function is a function passed as an argument to another function, which is then executed inside the outer function. Callbacks enable asynchronous operations, event handling, and cleaner, more modular code.

#### Example:
```javascript
const numsArr = [23, 56, 14, 20, 9, 20, 78, 55, 32, 42, 8, 12, 80];

const arrMultipliedBy2 = numsArr.map((item) => {
    return item * 2;
});
console.log(arrMultipliedBy2);
```

# Practical Use Cases

## 1. Efficient Operations
Higher Order Functions, along with Callbacks, allow for efficient operations by eliminating repetitive code. For example, the `manipulateArray` function can handle various array manipulations, promoting code reuse and reducing redundancy.

## 2. Mapping and Filtering Arrays
The `map` and `filter` methods are essential tools for working with arrays. They simplify operations, making code more readable and expressive. In the example, `arrMultipliedBy2` efficiently multiplies each element of an array by 2 using the `map` function.

## 3. Real-Life Example: Character Filtering
In a real-life scenario, the `filter` method can be used to extract specific elements from an array of objects. In the provided example, `hydroCharacters` filters characters with the vision "Hydro" from an array of fantasy characters.

By mastering Higher Order Functions and Callbacks, developers can create more modular, readable, and maintainable code, improving the overall quality of their projects.