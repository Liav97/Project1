const express = require("express")
const employeesModel = require("../models/employeesModel")
const employeesBL = require("../models/employeesBL")

const router = express.Router()

router.route("/")
    .get(async function (req, resp)
    {
        let data = await employeesBL.getData()
        return resp.json(data)
    })

router.route("/:id")
    .get(async function (req, resp)
    {
        let id = req.params.id
        let data = await employeesBL.getEmployee(id)
        return resp.json(data)
    })

router.route("/")
    .post(async function (req, resp)
    {
        let obj = req.body
        let status = await employeesBL.addEmployee(obj)
        return resp.json(status)
    })

router.route("/:id")
    .put(async function (req, resp)
    {
        let obj = req.body
        let id = req.params.id

        let status = await employeesBL.updateEmployee(id, obj)
        return resp.json(status)
    })

router.route("/:id")
    .delete(async function (req, resp)
    {
        let id = req.params.id
        let status = await employeesBL.deleteEmployee(id)
        return resp.json(status)
    })
    
    module.exports = router