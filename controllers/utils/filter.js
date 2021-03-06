const mongoose = require("mongoose");

/** 
 * ------ Date Filters ------ 
*/

// Date Oldest -> Newest (asc)
const oldToNew = async function (model) {
    return model.find({}, null, {sort: {date: 1}}).populate("developer").exec();
}

// Date Newest -> Oldest (desc)
const newToOld = async function (model) {
    return model.find({}, null, {sort: {date: -1}}).populate("developer").exec();
}

module.exports = {oldToNew, newToOld};