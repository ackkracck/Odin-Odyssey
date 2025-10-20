const convertToCelsius = function(f) {
  let temperature = (f-32)/(9/5);
  if (Number.isInteger(temperature)) {
    return Number(temperature);
  } else {
    return Number(temperature.toFixed(1));
  }
};

const convertToFahrenheit = function(c) {
  let temperature = (c*(9/5)) + 32;
  if (Number.isInteger(temperature)) {
    return Number(temperature);
  } else {
    return Number(temperature.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
