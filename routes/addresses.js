'use strict';

const express = require('express');
const router = express.Router();
const addressService = require('../services/addresses');

router.get('/create', async (req, res, next) => {
  try {
    await addressService.createAddress()
    .then(async address => {
        res.json({
            "status": 200,
            "address":address,
            "message": "Created"
        }).status(200)
    })
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.get('/list', async (req, res, next) => {
    try {
      res.json(await addressService.getAddresses());
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

module.exports = router;