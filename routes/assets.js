'use strict';

const express = require('express');
const router = express.Router();
const assetService = require('../services/assets');

router.get('/list', async (req, res, next) => {
    try {
      res.json(await assetService.getAssets());
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });


module.exports = router;