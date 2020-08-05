'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models/models');


router.get('/list', async (req, res, next) => {
    try {
      res.json(models.Static());
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

module.exports = router;