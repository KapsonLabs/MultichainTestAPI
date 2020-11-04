const express = require('express');
const router = express.Router();
const {validJWTNeeded} = require('../util/validators');
const {
    createSchool,
    getAllSchools,
    createCondition,
    getAllConditions,
    authenticateSchool,
    createPatient,
    getAllPatients,
    createCase
    } = require("../services/surveillance");

router.post("/authenticate", authenticateSchool)
router.post("/schools", createSchool)
router.get("/schools", getAllSchools)
router.post("/conditions", validJWTNeeded, createCondition)
router.get("/conditions", validJWTNeeded, getAllConditions)
router.post("/patients", validJWTNeeded, createPatient)
router.get("/patients", validJWTNeeded, getAllPatients)
router.post("/cases", createCase)


module.exports = router;