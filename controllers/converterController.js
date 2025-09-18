const moneyConverter = require('../services/moneyConverter');
const temperatureConverter = require('../services/temperatureConverter');
const timeConverter = require('../services/timeConverter');
const weightConverter = require('../services/weightConverter');

function money(req, res) {
    const { body } = req;
    const { value, from, to } = body;
    const result = moneyConverter(value, from, to);
    res.json({
        result: result
    })
}

function temperature(req, res) {
    const { body } = req;
    const { value, from, to } = body;
    const v = parseFloat(value);
    const result = temperatureConverter(v, from, to);
    res.json({
        result: result,
    })
}

function time(req, res) {
    const { body } = req;
    const { value, from, to } = body;
    const result = timeConverter(value, from, to);
    res.json({
        result: result
    })
}

function weight(req, res) {
    const { body } = req;
    const { value, from, to } = body;
    const result = weightConverter(value, from, to);
    res.json({
        result: result
    })
}

module.exports = {
    money,
    temperature,
    time,
    weight
}
