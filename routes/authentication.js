const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("../auth/passport-config");


router.route("/register")
    .get(authController.getRegisterPage)
    .put(authController.registerNewDev);

router.route("/login")
    .get(authController.getLoginPage)
    .put(passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
    }));

module.exports = router;