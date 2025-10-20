const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let output = 0;

  for (let i = 0; i < array.length; i++) {
    output += array[i];
  }

  return output;
};

const multiply = function(array) {
	let output = 1;

  for (let i = 0; i < array.length; i++) {
    output *= array[i];
  }

  return output;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0) return 1;

  let output = 1;

  for (let i = n; i > 0 ; i--) {
    output *= i;
  }

  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
