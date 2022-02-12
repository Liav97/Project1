const shift = require("../models/shiftModel")

const getData = function()
{
    return new Promise((resolve, reject) =>
    {
        shift.find({}, function(err, data)
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

const getShift = function(id)
{
    return new Promise((resolve, reject) =>
    {
        shift.findById(id, function(err, data)
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

const addShift = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let newShift = new shift(obj)
        newShift.save(function (err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Shift Added")
            }
        })
    })
}

module.exports = {getData , getShift , addShift}