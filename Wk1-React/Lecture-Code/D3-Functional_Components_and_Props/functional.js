const data = [
    {name: 'Jane', email: 'jdoe@mail.com', password: '123456789'},
    {name: 'John', email: 'jsmith@mail.com', password: 'abcdefghi'},
    {name: 'Mary', email: 'mjones@mail.com', password: '123abc456'}
]
// ! Separating our data and functions
const sayHi = (user) => {
    console.log(`${user.name} says hi!`);
}

// ! in functional programming we want to avoid manipulating data directly instead we make copies of the data and manipulate that
const addUser = (allUsers, userToBeAdded) => {
    // allUsers.push(userToBeAdded)
    const updatedUserList = [...allUsers, userToBeAdded]
    return updatedUserList
}

// ! adding a new user
const updatedUserList = addUser(data, {name: 'Bob', email: 'bob@mail.com', password: 'password'})

// ! the 2 console.logs below show that we did not change the original data
console.log('updatedUserList', updatedUserList);

console.log('DATA', data);