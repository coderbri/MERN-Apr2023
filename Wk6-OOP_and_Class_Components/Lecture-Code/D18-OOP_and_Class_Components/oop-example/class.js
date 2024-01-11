class Human {
    
    constructor( name, hairColor ) {
        this.name = name;
        this.hairColor = hairColor;
    }
    
    sayHi() {
        console.log(`Hi! My name is ${this.name}!`);
    }
}

const jane = new Human( 'Jane Doe', 'black' );
console.log(jane); // Human { name: 'Jane Doe', hairColor: 'Brown' }
jane.sayHi();

class Student extends Human {
    constructor( name, hairColor, currentStack ) {
        super(name, hairColor)
        this.currentStack = currentStack
    }
    
}
const jimmy = new Student('Jimmy Neutron', 'brown', 'MERN');
jimmy.sayHi();