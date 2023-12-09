function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise(( resolve, reject ) => {
        
        let headsCount = 0;
        let attempts = 0;
        
        const flipCoin = () => {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped.`)
            if ( result === "heads" ) {
                headsCount++;
            } else {
                headsCount = 0;
            }
            
            if ( headsCount === 5 ) {
                resolve(`It took ${ attempts } tries to flip five "heads".`);
            } else { // Ensure non-blocking behaviour
                setTimeout( flipCoin, 0 );
            }
        };
        
        flipCoin();
    });
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
console.log( "When does this run now?" );