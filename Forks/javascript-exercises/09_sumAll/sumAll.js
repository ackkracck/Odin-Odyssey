const sumAll = function (start, end) {

    if (start < 0 || end < 0) { return "ERROR"; } // Handles negative numbers
    if (!Number.isInteger(start) || !Number.isInteger(end)) { return "ERROR"; } // Handles non-int inputs

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
