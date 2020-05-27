'use strict';

const express = require('express');
const router = express.Router();
const indexService = require('../services/index');

router.get('/info', async (req, res, next) => {
  try {
    res.json(await indexService.getNodeInfo());
  } catch (err) {
    res.status(500);
    return next(err);
  }
});


module.exports = router;
