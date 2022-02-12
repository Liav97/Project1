const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

let departmentSchema = new mongoose.Schema({

    departmentName : String,
    manager : String

}, {collection : "departments"});

module.exports = mongoose.model("departments", departmentSchema)