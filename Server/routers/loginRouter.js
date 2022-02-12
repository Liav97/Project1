const express = require("express")
const loginBL = require("../models/loginBL")

const router = express.Router()

router.route("/:userin")
    .get(async function (req, resp)
    {
        let userInput = req.params.userin.split("$")
        let password = userInput[1]
        let username = userInput[0]
        let data = await loginBL.loginVerify(username, password)
        return resp.json(data)
    })
    
    module.exports = router