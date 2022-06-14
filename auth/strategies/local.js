const LocalStrategy = require("passport-local").Strategy;
const Dev = require("../../models/dev");
const passValidate = require("../utils/password").validate;

const verify = function (username, password, done) {
    Dev.findOne({username: username}, function (err, dev) {

        if (err) {
            return done(err);
        }
        if (!dev) {
            return done(null, false);
        }

        const validPass = passValidate(password, dev.hash, dev.salt);
        if (validPass) {
            return done(null, dev);
        } else {
            return done(null, false);
        }
    });
};

const localStrategy = new LocalStrategy(verify);
module.exports = localStrategy; 