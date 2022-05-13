require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const indexRouter = require("./routes/index"),
	composeRouter = require("./routes/compose"),
	entryRouter = require("./routes/entry");


// ------ App Config ------
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// ------ Database Config ------
mongoose.connect("mongodb://localhost:27017/devJournalDB");

// ------ Session Config ------
const storeOptions = {
	mongoUrl: process.env.DB_URL,
	ttl: 60 * 60 * 24 * 7,
	autoRemove: "interval",
	autoRemoveInterval: 60 * 24
}

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create(storeOptions)
}));


// ------ Routing ------
app.use(indexRouter);
app.use(composeRouter);
app.use(entryRouter);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});