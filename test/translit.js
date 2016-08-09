/* eslint-env mocha */
'use strict';

const expect = require('expect');
const translit = require('../src/translit');

describe('translit function', () => {

    it('should throw an error', () => {
        const input = null;

        expect(() => { translit(input); }).toThrow('Expected type of `input` to be a string');
    });

    it('should return an object with `value` and `extraLength` properties', () => {
        const input = 'абв';
        const result = translit(input);

        expect(result).toIncludeKeys(['value', 'extraLength']);
    });

    it('value should be an empty string', () => {
        const input = '';
        const result = translit(input);

        expect(result.value).toBe('');
    });

    it('value should be an appropriate string', () => {
        const input = 'ЛдОывРВцЖйцу';
        const result = translit(input);

        expect(result.value).toBe('LdOyvRVcJycu');
    });

    it('value should be the same string as input', () => {
        const input = 'Latin-String';
        const result = translit(input);

        expect(result.value).toBe('Latin-String');
    });

    it('extraLength should be an appropriate number', () => {
        const input = 'Мобилизация';
        const result = translit(input);

        expect(result.extraLength).toBe(1);
    });

    it('extraLength should not be less than zero', () => {
        const input = 'съезд';
        const result = translit(input);

        expect(result.extraLength).toBe(0);
    });

});
