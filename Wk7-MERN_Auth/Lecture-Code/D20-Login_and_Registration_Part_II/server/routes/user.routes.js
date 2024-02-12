const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.post("/api/register/user", UserController.registerUser);
    app.post("/api/login/user", UserController.loginUser);
    app.post("/api/logout/user", UserController.logoutUser);
}