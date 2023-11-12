// ! Data and functions are tied together in OOP
class User{
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }
    sayHi(){
        console.log(`Hi my name is ${this.name}!`);
    }
}
const jane = new User('jane', 'jdoe@jd.com', '1234567890')
const jsmith = new User('john smith', 'jsmith@js.com', '0987654321')

console.log(jane);
jane.sayHi();