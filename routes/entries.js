const express = require("express");
const router = express.Router();

/**
 *      ------ "/" ------
 */ 
router.get("/", function(req, res){

    if (Object.keys(req.query).length) {
    
      const filter = req.query.date_filter;
      
      if (filter == "asc") {
        // Sort Oldest `Date` first 
        Entry.find({}, null, {sort: {date: 1}}, function (err, entries) {
          if (err) {
            console.log(err);
          } else {
            console.log("rendering..");
            res.render("home", {
              entries: entries,
              newest: "",
              oldest: "selected"
            });
          }
        });
      } else { // "desc"
        // Sort Newest `Date` first
        Entry.find({}, null, {sort: {date: -1}}, function (err, entries) {
          if (err) {
            console.log(err);
          } else {
            res.render("home", {
              entries: entries,
              newest: "selected",
              oldest: ""
            });
          }
        });
      }
    } else {
      // Sort Newest `Date` First
      Entry.find({}, null, {sort: {date: -1}}, function (err, entries) {
        if (err) {
          console.log(err);
        } else {
          res.render("home", {
            entries: entries,
            newest: "selected",
            oldest: ""
          });
        }
      });
    }
});

/**
 *      ------ "/about" ------
 */
  
router.get("/about", function(req, res){
    res.render("about", {});
});

/**
 *      ------ "/compose" ------
 */
router.get("/compose", function(req, res){
  
    res.render("compose");
  
});

router.post("/compose", function(req, res){

    // Grab Data from POST request
    const entryDate = req.body.dateInput;
    const entryTitle = req.body.titleInput;
    const entryContent = req.body.postInput;
  
    console.log(entryDate);
  
    const newEntry = new Entry({
      title: entryTitle,
      date: entryDate,
      content: entryContent
    });
    newEntry.save();
  
    res.redirect("/");
    
});
  

/**
 *      ------ "/posts" ------
 */

router.get("/posts/:postID", function(req, res){
  
    const postID = req.params.postID;
    const dateOptions = {year:"numeric", month:"long", day:"numeric"};
  
    Entry.findById(postID, function(err, entry){
  
      console.log(entry);
  
      res.render("post", {
        title: entry.title,
        date: entry.date.toLocaleString("en-us", dateOptions),
        content: entry.content
      });
  
    });
  
});

module.exports = router;