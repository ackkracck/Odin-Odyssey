const fibonacci = function (input) {

    input = Number(input);

    if (input < 0) return 'OOPS';
    if (input === 0) return 0;
    if (input === 1) return 1;

    return fibonacci(input - 1) + fibonacci(input - 2);

};

// Do not edit below this line
module.exports = fibonacci;
