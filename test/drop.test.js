import { expect } from 'chai';
import drop from "../src/drop.js";

describe('drop', () => {
    it('drops the first element of an array when n is not provided', () => {
        expect(drop([1, 2, 3])).to.eql([2, 3]);
    });

    it('drops the first two elements when n is 2', () => {
        expect(drop([1, 2, 3], 2)).to.eql([3]);
    });

    it('returns an empty array when n is greater than array length', () => {
        expect(drop([1, 2, 3], 5)).to.eql([]);
    });

    it('returns the same array when n is 0', () => {
        expect(drop([1, 2, 3], 0)).to.eql([1, 2, 3]);
    });

    it('handles an empty array', () => {
        expect(drop([], 2)).to.eql([]);
    });

    it('handles null or undefined array', () => {
        expect(drop(null, 2)).to.eql([]);
        expect(drop(undefined, 2)).to.eql([]);
    });
});
