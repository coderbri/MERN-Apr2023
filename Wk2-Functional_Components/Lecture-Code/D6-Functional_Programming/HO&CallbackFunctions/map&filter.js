// ! Map and Filter are ONLY available on Arrays!
const numsArr = [ 23, 56, 14, 20, 9, 20, 78, 55, 32, 42, 8, 12, 80]

// this section between the 1st set of parenthesis is a callback function
//   it takes in three paramenters, and its faster than for looping
//*  arrayName.map( ( item, index, arrayBeingMapped ) => {} )
numsArr.map(( item, index ) => {
    console.log(`=== Item ${item}, at Index ${index} ===`)
})
/*
=== Item 23, at Index 0 ===
=== Item 56, at Index 1 ===
=== Item 14, at Index 2 ===
=== Item 20, at Index 3 ===
=== Item 9, at Index 4 ===
=== Item 20, at Index 5 ===
=== Item 78, at Index 6 ===
=== Item 55, at Index 7 ===
=== Item 32, at Index 8 ===
=== Item 42, at Index 9 ===
=== Item 8, at Index 10 ===
=== Item 12, at Index 11 ===
=== Item 80, at Index 12 ===
*/

const arrMultipliedBy2 = numsArr.map(( item, idx ) => {
    return item * 2
})
console.log(arrMultipliedBy2)
/* [
    46, 112,  28, 40, 18,
    40, 156, 110, 64, 84,
    16,  24, 160
] */

const evenNums = numsArr.filter( (item, idx, wholeArray) => item % 2 === 0)
console.log(evenNums)
/* [
    56, 14, 20, 20, 78,
    32, 42,  8, 12, 80
] */


const fontaineCharacters = [
    { name: "Lyney", vision: "Pyro", weapon: "Bow", exclusive: true },
    { name: "Lynette", vision: "Anemo", weapon: "Sword", exclusive: false },
    { name: "Freminet", vision: "Cryo", weapon: "Greatsword", exclusive: false },
    { name: "Neuvillette", vision: "Hydro", weapon: "Catalyst", exclusive: true },
    { name: "Wriothesley", vision: "Cryo", weapon: "Catalyst", exclusive: true },
    { name: "Furina", vision: "Hydro", weapon: "Sword", exclusive: true },
    { name: "Charlotte", vision: "Cryo", weapon: "Catalyst", exclusive: false },
]

const hydroCharacters = fontaineCharacters.filter((character) => character.vision === "Hydro")
console.log(hydroCharacters)
/*
[
    { name: 'Neuvillette', vision: 'Hydro', weapon: 'Catalyst', exclusive: true },
    { name: 'Furina', vision: 'Hydro', weapon: 'Sword', exclusive: true }
]
*/