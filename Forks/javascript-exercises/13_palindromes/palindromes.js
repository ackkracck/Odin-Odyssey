const palindromes = function (input) {
    const valid = new Set("abcdefghijklmnopqrstuvwxyz0123456789");

    let filtered = Array.from(input.toLowerCase())
        .filter(char => valid.has(char));

    return filtered.join('') === filtered.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
