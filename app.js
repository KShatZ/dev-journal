const express = require("express");
const mongoose = require("mongoose");


// App Config
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// Database Config - local
mongoose.connect("mongodb://localhost:27017/devJournalDB");

const entrySchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  date: {
    required: true,
    type: Date
  },
  content: {
    required: true,
    type: String
  }
});
const Entry = mongoose.model("Entry", entrySchema);

/* GET REQUESTS */

app.get("/", function(req, res){

  // Getting entries from Database
  Entry.find({}, function(err, entries){

    if (!err){
      res.render("home", {entries: entries});
    } else {
      console.log(err);
    }
  });
});

app.get("/about", function(req, res){

  res.render("about", {
    
  });

});

app.get("/compose", function(req, res){

  res.render("compose");

});


app.get("/posts/:postID", function(req, res){

  const postID = req.params.postID;
  const dateOptions = {year:"numeric", month:"long", day:"numeric"};

  Entry.findById(postID, function(err, entry){

    res.render("post", {
      title: entry.title,
      date: entry.date.toLocaleString("en-us", dateOptions),
      content: entry.content
    });

  });

});

/* POST REQUESTS */
app.post("/compose", function(req, res){

  // Grab Data from POST request
  const entryDate = req.body.dateInput;
  const entryTitle = req.body.titleInput;
  const entryContent = req.body.postInput;

  const newEntry = new Entry({
    title: entryTitle,
    date: entryDate,
    content: entryContent
  });
  newEntry.save();

  res.redirect("/");
  
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});