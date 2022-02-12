const express = require("express")
const departmentModel = require("../models/departmentModel")
const departmentsBL = require("../models/departmentsBL")

const router = express.Router()

router.route("/")
    .get(async function (req, resp)
    {
        let data = await departmentsBL.getData()
        return resp.json(data)
    })

router.route("/:id")
    .get(async function (req, resp)
    {
        let id = req.params.id
        let data = await departmentsBL.getDepartment(id)
        return resp.json(data)
    })

router.route("/")
    .post(async function (req, resp)
    {
        let obj = req.body
        let status = await departmentsBL.addDepartment(obj)
        return resp.json(status)
    })

router.route("/:id")
    .put(async function (req, resp)
    {
        let obj = req.body
        let id = req.params.id

        let status = await departmentsBL.updateDepartment(id, obj)
        return resp.json(status)
    })

router.route("/:id")
    .delete(async function (req, resp)
    {
        let id = req.params.id
        let status = await departmentsBL.deleteDepartment(id)
        return resp.json(status)
    })
    
    module.exports = router