const mongoose = require("mongoose");

/** 
 * ------ Date Filters ------ 
*/

// Date Oldest -> Newest (asc)
const oldToNew = async function (model) {
    return model.find({}, null, {sort: {date: 1}}).exec();
}

// Date Newest -> Oldest (desc)
const newToOld = async function (model) {
    return model.find({}, null, {sort: {date: -1}}).exec();
}

module.exports = {oldToNew, newToOld};