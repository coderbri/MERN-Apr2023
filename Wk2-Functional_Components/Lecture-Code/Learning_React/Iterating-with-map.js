const nums = [1, 2, 3, 4, 5];
const newNums = [];

// Starting at the 1st index,
    // loop through each value of nums array
    // multiply the value at that index by 2, then push to newNums array
    // increment idx by 1 and repeat
for ( let i = 0; i < nums.length; i++ ) {
    newNums.push( nums[i] * 2 );
}
console.log(newNums); // [ 2, 4, 6, 8, 10 ]

// While this may work, there is a quicker way—maps.
const newNumsArr = nums.map( (num) => {
    return num * 2;
});
console.log(newNumsArr); // [ 2, 4, 6, 8, 10 ]

// Another way:
function double( num ) {
    return num * 2;
}
// The above function will run while the array is being mapped through
const anotherNewNumsArr = nums.map( double );
console.log(anotherNewNumsArr);