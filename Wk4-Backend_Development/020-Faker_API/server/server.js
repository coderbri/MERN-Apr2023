const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 8000;


const createUser = () => {
    const generatedFakeUserData = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumer: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return generatedFakeUserData;
}
// const newFakeUser = createUser();
// console.log(newFakeUser);

const createCompany = () => {
    const generatedFakeCompanyData = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        adress: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return generatedFakeCompanyData;
}
// const newFakeCompany = createCompany();
// console.log(newFakeCompany);

// * API ROUTES
app.get( "/api/users/new", (request, response) => {
    const newUser = createUser();
    response.json( newUser ); // generate new user data in JSON format
});

app.get( "/api/companies/new", (request, response) => {
    const newCompany = createCompany();
    response.json( newCompany );
});

app.get( "/api/user/company", (request, response) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const employeeData = {
        user: newUser,
        company: newCompany,
    }
    response.json( employeeData );
});


app.listen( port, () => console.log(`Listening on port: ${port}.`) );