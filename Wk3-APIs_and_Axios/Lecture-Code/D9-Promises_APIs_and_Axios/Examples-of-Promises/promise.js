let trashGotTakeOut = false;

const takeOutTheTrash = new Promise(( resolve, reject ) => {
    if ( trashGotTakeOut ) {
        resolve( 'Thanks for taking out the trash.' );
    } else {
        reject( 'You didn\'t take out the trash.' );
    }
});

takeOutTheTrash
    .then( message => console.log(message) ) // prints the resolve in takeOutTheTrash()
    .catch( err => console.log(err) )


function getGenshinCharacters ( request ) {
    return new Promise((resolve, reject) => {
        if (request === '原神') {
            resolve([
                { name: "Keqing", vision: "Electro", weapon: "Sword", exclusive: false },
                { name: "Tartaglia", vision: "Hydro", weapon: "Bow", exclusive: true },
                { name: "Jean", vision: "Anemo", weapon: "Sword", exclusive: false },
                { name: "Xiao", vision: "Anemo", weapon: "Polearm", exclusive: true },
                { name: "Kaedehara Kazuha", vision: "Anemo", weapon: "Sword", exclusive: true },
                { name: "Venti", vision: "Anemo", weapon: "Bow", exclusive: true },
                { name: "Diluc", vision: "Pyro", weapon: "Claymore", exclusive: false },
                { name: "Wanderer", vision: "Anemo", weapon: "Catalyst", exclusive: true },
                { name: "Ayato", vision: "Hydro", weapon: "Sword", exclusive: true },
                { name: "Hu Tao", vision: "Pyro", weapon: "Polearm", exclusive: true },
                { name: "Dehya", vision: "Pyro", weapon: "Claymore", exclusive: false },
                { name: "Yae Miko", vision: "Electro", weapon: "Catalyst", exclusive: true },
                { name: "Qiqi", vision: "Cryo", weapon: "Sword", exclusive: false },
                { name: "Neuvillette", vision: "Hydro", weapon: "Catalyst", exclusive: true },
                { name: "Furina", vision: "Hydro", weapon: "Sword", exclusive: true },
            ])
        } else {
            reject({ message: 'Sorry, we don\'t understand that request try again.', hint: 'Try "原神" as your requst.' })
        }
    })
}
getGenshinCharacters('notyuanshen')
    .then( data => console.log(data) )
    .catch( err => console.log(err) )


// Works similarly to .then() and .catch()
const makeRequest = async () => {
    try{
        const dataResponse = await(getGenshinCharacters('原神'))
        console.log(dataResponse)
    }
    catch(err) {
        console.log(err);
    }
}
makeRequest();