const e = require("cors")
const employee = require("../models/employeesModel")

const getData = function()
{
    return new Promise((resolve, reject) =>
    {
        employee.find({}, function(err, data)
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

const getEmployee = function(id)
{
    return new Promise((resolve, reject) =>
    {
        employee.findById(id, function(err, data)
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

const addEmployee = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let emp = new employee(obj)
        emp.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("employee added")
            }
        })
    })
}

const updateEmployee = function(id, obj)
{
    return new Promise((resolve, reject) =>
    {
        employee.findByIdAndUpdate(id, obj, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("employee updated")
            }
        })
    })
}

const deleteEmployee = function(id)
{
    return new Promise((resolve, reject) =>
    {
        employee.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("employee deleted")
            }
        })
    })
}

module.exports = {getData , getEmployee , addEmployee , updateEmployee , deleteEmployee}