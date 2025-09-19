const times = {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    month: 2592000,
    year: 31536000
} // Tiempo en segundos

function timeConverter(value, from, to) {
    const res = (value * times[from]) / times[to];
    return res
}

console.log(timeConverter(48, 'hour', 'day'))
module.exports = timeConverter;
