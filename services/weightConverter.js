const weights = {
    g: 1,
    lb: 453.6,
    kg: 1000
}

function weightCoverter(value, from, to) {
    const result = (value * weights[from]) / weights[to];
    return Math.round(result * 100) / 100
}

// console.log(weightCoverter(100, 'kg', 'lb'))

module.exports = weightCoverter;