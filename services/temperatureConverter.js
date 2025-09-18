function convertTemperature(value, from, to) {
    const conversions = {
        celsius: {
            celsius: (v) => v,
            fahrenheit: (v) => (v * 9 / 5) + 32,
            kelvin: (v) => (v + 273.15)
        },
        fahrenheit: {
            celsius: (v) => (v - 32) * 5 / 9,
            fahrenheit: (v) => v,
            kelvin: (v) => ((v - 32) * 5 / 9) + 273.15
        },
        kelvin: {
            celsius: (v) => v - 273.15,
            fahrenheit: (v) => ((v - 273.15) * 9 / 5) + 32,
            kelvin: (v) => v
        }
    };

    return Math.round(conversions[from][to](value) * 100) / 100;
}

module.exports = convertTemperature;
