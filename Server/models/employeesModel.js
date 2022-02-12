const mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    employmentYear : Number,
    department : String

}, {collection : "employees"});

module.exports = mongoose.model("employees", employeeSchema)