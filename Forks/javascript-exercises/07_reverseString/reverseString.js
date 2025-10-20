const reverseString = function(str) {
    let newStr = '';
    for (i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
