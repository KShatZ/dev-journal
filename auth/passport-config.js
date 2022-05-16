const Dev = require("../models/dev");
const passport = require("passport");
const localStrategy = require("./strategies/local");


// ------ Serialization / Deserialization -------
passport.serializeUser(function (dev, done) {
    return done(null, dev.id);
});

passport.deserializeUser(function (devID, done) {
    Dev.findById(devID, function (err, dev) {
        if (err) {
            return done(err);
        }
        return done(null, dev);
    })
});


// ------ Strategy Loading ------ 
passport.use(localStrategy);



module.exports = passport;