const express = require('express');
const router = express.Router();
const surveillanceController = require("../services/surveillance");

router.post("/schools", surveillanceController.createSchool)
// router.get("/schools", authController.getUsers)


module.exports = router;