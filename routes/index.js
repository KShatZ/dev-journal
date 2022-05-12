const express = require("express");
const router = express.Router();
const Entry = require("../models/entry");

// ------ ROUTES ------
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

module.exports = router;