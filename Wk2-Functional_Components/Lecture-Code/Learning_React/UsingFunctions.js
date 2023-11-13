const add = ( props ) => {
    console.log("This is inside the add function: ");
    addedNums = props.num1 + props.num2;
    console.log(addedNums);
    return addedNums
};

// This represents the properties object (aka props)
//  that's generated in the React app
const props = {
    num1: 4,
    num2: 6,
};

let sum = add(props);
console.log("This is the sum: ");
console.log(sum);