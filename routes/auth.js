const { request } = require('express');
const express = require('express');
const router = express.Router();
const authController = require("../services/auth");
const multer  = require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
let upload = multer({ storage: storage })



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

router.post("/upload_forms", upload.single('forms'), authController.uploadFiles)

module.exports = router;