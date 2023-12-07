import compact from "../src/compact.js"; // Adjust the path as per your project structure
import { expect } from 'chai';

describe('compact', () => {


    it('returns an empty array when all values are falsey', () => {
        const result = compact([0, false, '', null, undefined, NaN]);
        expect(result).to.eql([]);
    });



    it('handles an empty array', () => {
        const result = compact([]);
        expect(result).to.eql([]);
    });


    it('does not modify the original array', () => {
        const originalArray = [0, 1, false];
        compact(originalArray);
        expect(originalArray).to.eql([0, 1, false]);
    });
});
