const { request } = require('express');
const express = require('express');
const router = express.Router();
const authController = require("../services/auth");


router.post("/users", (req, res, next) => {
    const {phoneNumber, otp, firstName, lastName} = req.body
    authController.addUser(
        phoneNumber,
        otp,
        firstName,
        lastName
    )
    res.json(
        {
            "status":201,
            "data": "some data"
        }
    )
})

router.get("/users", authController.getUsers)

router.post("/get_otp", authController.getSpecificUser)

router.post("/verify", authController.authenticateUser)

module.exports = router;