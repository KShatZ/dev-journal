require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("./auth/passport-config");

const indexRouter = require("./routes/index"),
composeRouter = require("./routes/compose"),
entryRouter = require("./routes/entry"),
authRouter = require("./routes/authentication");


// ------ App Config ------
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// ------ Database Config ------
mongoose.connect("mongodb://localhost:27017/devJournalDB");

// ------ Session & Passport ------
const storeOptions = {
	mongoUrl: process.env.DB_URL,
	ttl: 60 * 60 * 24 * 7,
	autoRemove: "interval",
	autoRemoveInterval: 60 * 24
};
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create(storeOptions)
}));

app.use(passport.initialize());
app.use(passport.session());

// ------ Routing ------
app.use(indexRouter);
app.use(composeRouter);
app.use(entryRouter);
app.use(authRouter);

app.get("/account", function (req, res) {

	if (!req.isAuthenticated()) {
		return res.redirect("login");
	}

	res.render("account", {
		auth: true,
		username: req.user.username
	});
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});