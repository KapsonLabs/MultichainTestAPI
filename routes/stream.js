'use strict';

const express = require('express');
const router = express.Router();
const streamService = require('../services/stream');

router.get('/list', async (req, res, next) => {
  try {
    res.json(await streamService.listStreams());
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.get('/items', async (req, res, next) => {
  try {
    res.json(await streamService.listStreamItems(req.query.stream, req.query.itemsCount));
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    await streamService.createNewStream(req.body.name)
    .then(async response => {
        if(response.code=='-705'){
            return res.status(400).json(
                {"error": "Stream or asset with this name already exists"}
            )
        }else{
            return res.status(200).json({
                "txhash":response,
                "message":"stream successfully created"
            })
        }
    })
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

router.post('/subscribe', async (req, res, next) => {
  try {
    await streamService.subscribeToStream(req.body.stream)
    .then(async response => {
        if(response===null){
            return res.status(200).json({
                "message":"stream subscription successfull",
                "status": 200
            })
        }else if(response.code=='-708'){
            return res.status(400).json(
                {"error": "Entity with this name not found",
                "status":400
                }
            )
        }
    })
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

router.post('/publish', async (req, res, next) => {
  try {
    await streamService.publishDataToStream(req.body.stream, req.body.data)
    .then(async response => {
        return res.status(200).json({
            "status":200,
            "txid": response,
            "message": "Data published successfully to stream"
        })
    })
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = router;
