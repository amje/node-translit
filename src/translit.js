'use strict';

const translitMap = require('./translitMap');

function translit(input) {
    if (typeof input !== 'string') {
        throw new Error('Expected type of `input` to be a string');
    }

    let result = '';

    for (let i = 0, l = input.length; i < l; i++) {
        let char = input[i];
        let translitedChar = translitMap[char];

        if (translitedChar) {
            result += translitedChar;
        } else {
            result += char;
        }
    }

    return result;
}

module.exports = translit;
