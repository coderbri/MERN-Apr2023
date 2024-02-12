const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

// as we hadle web tokens, some authentication also needs to be handled
// authentication - are they who the user says they are?
// authorization - what is this user able to access?
module.exports = {
    authenticate: (request, response) => {
        jwt.verify( request.cookies.userToken, secret, (err, payload) => {
            if (error) {
                response.status(401).json({ verified: false });
            } else {
                next();
            }
        });
    }
}