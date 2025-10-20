// I'm so dumb

const removeFromArray = function (...args) {
    const array = args[0];
    const values = args.slice(1, args.length);

    if (values.length === 0) { return array; }

    let output = [];
    let included = false;

    for (let i = 0; i < array.length; i++) {

        let checkValue = array[i];
        included = false;

        for (let j = 0; j < values.length; j++) {
            if (values[j] === checkValue) {
                included = true;
            }
        }

        if (!included) {
            output.push(checkValue);
        }
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
