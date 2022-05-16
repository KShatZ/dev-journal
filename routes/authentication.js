const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("../auth/passport-config");


router.route("/register")
    .get(authController.getRegisterPage)
    .post(authController.registerNewDev);

router.route("/login")
    .get(authController.getLoginPage)
    .post(passport.authenticate("local", {failureRedirect: "/login", successRedirect: "/"}));

module.exports = router;