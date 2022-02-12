const express = require("express")
const shiftModel = require("../models/shiftModel")
const shiftsBL = require("../models/shiftsBL")

const router = express.Router()

router.route("/")
    .get(async function (req, resp)
    {
        let data = await shiftsBL.getData()
        return resp.json(data)
    })

router.route("/:id")
    .get(async function (req, resp)
    {
        let id = req.params.id
        let data = await shiftsBL.getShift(id)
        return resp.json(data)
    })

router.route("/")
    .post(async function (req, resp)
    {
        let obj = req.body
        let status = await shiftsBL.addShift(obj)
        return resp.json(status)
    })

    module.exports = router