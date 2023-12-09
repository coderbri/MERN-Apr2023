# Asynchronous Coin Flipping with Promises

## Problem Statement

Consider a scenario where we want to simulate flipping a coin using the `tossCoin()` function:

```js
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
console.log(tossCoin());
```

Now, imagine a requirement to determine how long it takes for a coin to land on "heads" five times in a row. Here's a synchronous solution:

```js
function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped.`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads".`
}
console.log(fiveHeadsSync());
console.log("This line is run after the fiveHeadsSync() function completes.");
```

However, this synchronous approach has a downside. It takes an indeterminate amount of time, preventing any code from running while the coin flipping is in progress.

## Promises to the Rescue

To address this, we can leverage Promises to create an **asynchronous solution**:

```js
function fiveHeads() {
    return new Promise((resolve, reject) => {
        
        let headsCount = 0;
        let attempts = 0;
        
        const flipCoin = () => {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped.`)
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            
            if (headsCount === 5) {
                resolve(`It took ${attempts} tries to flip five "heads".`);
            } else { // Ensure non-blocking behavior
                setTimeout(flipCoin, 0);
            }
        };
        
        flipCoin();
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err))
console.log("When does this run now?");
```

## Breaking Down the Solution

1. **`tossCoin()` function:**
   - Simulates flipping a coin by returning "heads" or "tails" randomly.

2. **`fiveHeads()` function:**
   - Returns a Promise that resolves when the coin lands on "heads" five times in a row.
   - Uses a recursive `flipCoin` function inside, which increments attempts, checks for "heads," and resolves the Promise when the condition is met.
   - Introduces `setTimeout` to ensure non-blocking behavior.

3. **Usage:**
   - The asynchronous `fiveHeads()` function is called, and `then()` and `catch()` are used to handle the resolved value or any potential errors.
   - The last line demonstrates that it doesn't wait for the asynchronous process to complete, allowing other code to execute concurrently.

---
<p align="right">Completed: ２０２３年１２月０９日（土）</p>