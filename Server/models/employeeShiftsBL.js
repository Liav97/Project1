const employeeShifts = require("../models/employeeShiftsModel")

const getData = function()
{
    return new Promise((resolve, reject) =>
    {
        employeeShifts.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

const getEmployeeShift = function(id)
{
    return new Promise((resolve, reject) =>
    {
        employeeShifts.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

const addShiftToEmployee = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let shift = new employeeShifts(obj)
        shift.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Shift added to Employee")
            }
        })
    })
}

const deleteEmployeeShift = function(id)
{
    return new Promise((resolve, reject) =>
    {
        employeeShifts.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("department deleted")
            }
        })
    })
}

module.exports = {getData , getEmployeeShift , addShiftToEmployee , deleteEmployeeShift}