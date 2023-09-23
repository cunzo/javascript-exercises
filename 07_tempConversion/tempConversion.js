const convertToCelsius = function(arg) {
  const result = (arg-32)*5/9;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(arg) {
  const result = (arg*(9/5))+32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
