const express = require("express");
const router = express.Router();
const converter = require('../controllers/converterController')

router
    .post('/money', converter.money)
    .post('/temperature', converter.temperature)
    .post('/time', converter.time)
    .post('/weight', converter.weight)

module.exports = router;
