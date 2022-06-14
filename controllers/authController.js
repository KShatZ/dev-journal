const Dev = require("../models/dev");
const generatePass = require("../auth/utils/password").generate;

const getRegisterPage = function (req, res) {
    if (!req.isAuthenticated()) {
        res.render("register", {
            auth: 0,
            path: req.path
        });
    } else {
        res.redirect("/");
    }
};

const getLoginPage = function (req, res) {
    if (!req.isAuthenticated()) {
        res.render("login", {
            auth: 0,
            path: req.path
        });
    } else {
        res.redirect("/");
    }
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
            return res.redirect("login");
        }
    });
}

const logOutDev = function (req, res) {
    if (!req.isAuthenticated()) {
		return res.redirect("/");
	}
	req.logOut();
	res.redirect("/");
}

module.exports = {
    getRegisterPage,
    getLoginPage,
    registerNewDev,
    logOutDev
}