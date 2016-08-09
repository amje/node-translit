'use strict';

const translitMap = require('./translitMap');

function translit(input) {
    if (typeof input !== 'string') {
        throw new Error('Expected type of `input` to be a string');
    }

    let value = '';

    for (let i = 0, l = input.length; i < l; i++) {
        let char = input[i];
        let translitedChar = translitMap[char];

        if (typeof translitedChar === 'undefined') {
            value += char;
        } else {
            value += translitedChar;
        }
    }

    const extraLength = Math.max(0, value.length - input.length);

    return {
        value,
        extraLength
    };
}

module.exports = translit;
