import compact from "../src/compact.js"; // Adjust the path as per your project structure
import { expect } from 'chai';

describe('compact', () => {
    it('removes falsey values from an array', () => {
        const result = compact([0, 1, false, 2, '', 3]);
        expect(result).to.eql([1, 2, 3]);
    });

    it('returns an empty array when all values are falsey', () => {
        const result = compact([0, false, '', null, undefined, NaN]);
        expect(result).to.eql([]);
    });

    it('handles an array with only truthy values', () => {
        const result = compact([1, 2, 3]);
        expect(result).to.eql([1, 2, 3]);
    });

    it('handles an empty array', () => {
        const result = compact([]);
        expect(result).to.eql([]);
    });

    it('handles arrays with complex elements', () => {
        const obj = { a: 1 };
        const func = () => {};
        const result = compact([0, obj, '', func, NaN]);
        expect(result).to.eql([obj, func]);
    });

    it('does not modify the original array', () => {
        const originalArray = [0, 1, false];
        compact(originalArray);
        expect(originalArray).to.eql([0, 1, false]);
    });
});
