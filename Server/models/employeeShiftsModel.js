const mongoose = require("mongoose");

let employeeShiftsSchema = new mongoose.Schema({

    employeeID : String,
    shiftID : String

}, {collection : "eShifts"});

module.exports = mongoose.model("eShifts", employeeShiftsSchema)