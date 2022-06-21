const express = require("express");
const Entry = require("../models/entry");

const getComposePage = function (req, res) {
    if (req.isAuthenticated()) {
        res.render("compose", {
            auth: 1,
            path: req.path
        });
    } else {
        res.redirect("/login");
    }
};

const postNewEntry = function (req, res) {
    const date = new Date(),
          title = req.body.entryTitle,
          content = req.body.entryContent;
    
    const newEntry = new Entry({
        title: title,
        date: date,
        content: content,
        developer: {
            firstName: req.user.firstName,
            lastName: req.user.lastName
        }
    });

    newEntry.save(function (err) {
        if (err) {
            return (console.log(err));
        }
        res.redirect("/");
    });
};

module.exports = {getComposePage, postNewEntry};