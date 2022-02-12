const express = require("express")
const employeeShiftModel = require("../models/employeeShiftsModel")
const employeeShiftsBL = require("../models/employeeShiftsBL")

const router = express.Router()

router.route("/")
    .get(async function (req, resp)
    {
        let data = await employeeShiftsBL.getData()
        return resp.json(data)
    })

router.route("/:id")
    .get(async function (req, resp)
    {
        let id = req.params.id
        let data = await employeeShiftsBL.getEmployeeShift(id)
        return resp.json(data)
    })

router.route("/")
    .post(async function (req, resp)
    {
        let obj = req.body
        let status = await employeeShiftsBL.addShiftToEmployee(obj)
        return resp.json(status)
    })

router.route("/:id")
    .delete(async function (req, resp)
    {
        let id = req.params.id
        let status = await employeeShiftsBL.deleteEmployeeShift(id)
        return resp.json(status)
    })

    module.exports = router