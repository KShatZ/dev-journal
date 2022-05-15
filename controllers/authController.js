const Dev = require("../models/dev");
const generatePass = require("../auth/utils/password").generate;


const getRegisterPage = function (req, res) {
    res.render("register");
};

const getLoginPage = function (req, res) {
    res.render("login");
};

const registerNewDev = function (req, res) {

    const userAuth = generatePass(req.body.password);
    const newDev = new Dev({
        username: req.body.username,
        hash: userAuth.hash,
        salt: userAuth.salt
    });

    newDev.save(function (err) {
        if (err) {
            // To-Do: Proper Handler
            console.log(err);
            return getRegisterPage(req, res);
        } else {
            return getLoginPage(req, res);
        }
    });
}

module.exports = {
    getRegisterPage,
    getLoginPage,
    registerNewDev
}