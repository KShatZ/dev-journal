const Dev = require("../models/dev");
const generatePass = require("../auth/utils/password").generate;
const passport = require("../auth/passport-config");

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

const registerNewDev = async function (req, res) {

    const userExists = await Dev.exists({username: req.body.username});
    if (userExists) {
        console.log("User exists...");
        return res.status(409).end();
    } 

    const userAuth = generatePass(req.body.password);
    const newDev = new Dev({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        username: req.body.username,
        hash: userAuth.hash,
        salt: userAuth.salt
    });

    newDev.save(function (err) {
        if (err) {
            // To-Do: Proper Handler
            console.log(err);
            return res.status(500).end()
        } else {
            return res.status(201).end();
        }
    });
};

const loginDev = function (req, res, next) {
    passport.authenticate("local", function (err, user) {
        if (err) {
            // To-Do Proper Error Handling
            console.log("PassportAuthenticateError:", err);
            return res.status(500).end();
        }
        
        if(!user) {
            return res.status(401).end();
        }

        req.login(user, function (err) {
            if (err) {
                // To-Do Propper Error Handling
                console.log("LoginError:", err);
                return res.status(500).end()
            }
            return res.status(200).end();
        });
    })(req, res, next);
};

const logOutDev = function (req, res) {
    if (!req.isAuthenticated()) {
		return res.redirect("/");
	}
	req.logOut();
	res.redirect("/");
};

module.exports = {
    getRegisterPage,
    getLoginPage,
    registerNewDev,
    loginDev,
    logOutDev
};