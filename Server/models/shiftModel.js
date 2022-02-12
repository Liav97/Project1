const mongoose = require("mongoose");

let shiftSchema = new mongoose.Schema({
    shiftDate : String,
    startTime : String,
    endTime : String

}, {collection : "tShifts"});

module.exports = mongoose.model("tShifts", shiftSchema)