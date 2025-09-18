const money = {
    cop: 3887,
    usd: 1,
    eur: 0.84
}

function moneyConverter(value, from, to) {
    const result = (value / money[from]) * money[to];
    return Math.round(result * 100) / 100
}

// console.log(moneyConverter(10, 'eur', 'usd'))

module.exports = moneyConverter;