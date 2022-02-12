const department = require("../models/departmentModel")

const getData = function()
{
    return new Promise((resolve, reject) =>
    {
        department.find({}, function(err, data)
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

const getDepartment = function(id)
{
    return new Promise((resolve, reject) =>
    {
        department.findById(id, function(err, data)
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

const addDepartment = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let dep = new department(obj)
        dep.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("department added")
            }
        })
    })
}

const updateDepartment = function(id, obj)
{
    return new Promise((resolve, reject) =>
    {
        department.findByIdAndUpdate(id, obj, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("department updated")
            }
        })
    })
}

const deleteDepartment = function(id)
{
    return new Promise((resolve, reject) =>
    {
        department.findByIdAndDelete(id, function(err)
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

module.exports = {getData , getDepartment, addDepartment, updateDepartment, deleteDepartment}