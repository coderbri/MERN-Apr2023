// ! The following functions are NOT efficient, NOT DRY!
// ! its better to take in a parameter to square a num
const squareTen = () => {
    return 10*10
}
const squareNine = () => {
    return 9*9
}
const squareFive = () => 5*5

// * This is efficient!
const squareNums = (num) => {
    return num*num
}


// ! The following 3 functions are too repetitive.s
const multiplyArrBy2 = (arr) => {
    let output = [];
    for (let index = 0; index < arr.length; index++) {
        output.push(arr[index] * 2);
    }
    return output;
};
let result = multiplyArrBy2([2, 4, 6]);
console.log(result); // [4, 8, 12]

const multiplyArrBy3 = (arr) => {
    let output = [];
    for (let index = 0; index < arr.length; index++) {
        output.push(arr[index] * 3);
    }
    return output;
};
let result2 = multiplyArrBy3([2, 4, 6]);
console.log(result2); // [6, 12, 18]

const divideArrBy2 = (arr) => {
    let output = [];
    for (let index = 0; index < arr.length; index++) {
        output.push(arr[index] / 2);
    }
    return output;
};
let result3 = divideArrBy2([2, 4, 6]);
console.log(result3); // [1, 2, 3]


// * It can be more efficient, and generic
// These instructions are function that will be passed into this function
//  this can be done by adding little helper functions underneath this one
const manipulateArray = ( arr, instructions ) => {
    console.log(`Array: ${arr}\nFunction: ${instructions}`)
    
    let output = []
    for (let index = 0; index < arr.length; index++) {
        // Based on what instruction is passed,
        //  the index will be manipulated to produce a value
        output.push( instructions(arr[index]) )
    }
    return output
}
const multiplyElementBy2 = (val) => val*2
const divideElementBy2 = (val) => val/2

const result4 = manipulateArray( [12,24,36], divideElementBy2 )
console.log(result4)