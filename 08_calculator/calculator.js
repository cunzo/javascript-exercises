const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let tot = 0;
  a.forEach(element => {
    tot += element;
  });
  return tot;
};

const multiply = function(a) {
  return a.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(a) {
	let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
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
