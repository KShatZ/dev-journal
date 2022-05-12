const express = require("express");
const mongoose = require("mongoose");

const entryRoutes = require("./routes/entries.js");


// App Config
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// Database Config - local
mongoose.connect("mongodb://localhost:27017/devJournalDB");

// Routing
app.use(entryRoutes);



app.listen(3000, function() {
  console.log("Server started on port 3000");
});