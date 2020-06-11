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

router.post('/info', async (req, res, next) => {
    try {
      res.json(await assetService.getAssetInformation(req.body.asset));
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

router.post('/issue', async (req, res, next) => {
  try {
    const {address, asset, qty, units} = req.body
    await assetService.createNewAsset(address, asset, qty, units)
    .then(async response => {
      if(response.code=='-705'){
          return res.status(400).json(
              {"error": "Stream or asset with this name already exists", "status": 400}
          )
      }else if(response.code=='-704'){
          return res.status(400).json(
            {"error": response.message, "status": 400}
          )
      }
      else{
          return res.status(200).json({
              "txhash":response,
              "message":"asset successfully issued",
              "status": 200
          })
      }
  })
  } catch (error) {
    res.status(500).json({"status":500});
    return next(err);
  }
})


module.exports = router;