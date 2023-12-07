import compact from "./compact.js";
import { expect } from 'chai';
describe('compact', () => {
    it('removes falsey values from an array', () => {
        expect(compact([0, 1, false, 2, '', 3])).to.eql([1, 2, 3]);
    });

    it('returns an empty array when all values are falsey', () => {
        expect(compact([0, false, '', null, undefined, NaN])).to.eql([]);
    });

    it('handles an array with only truthy values', () => {
        expect(compact([1, 2, 3])).to.eql([1, 2, 3]);
    });

    it('handles an empty array', () => {
        expect(compact([])).to.eql([]);
    });

    it('handles arrays with complex elements', () => {
        const obj = { a: 1 };
        const func = () => {};
        expect(compact([0, obj, '', func, NaN])).to.eql([obj, func]);
    });

    it('does not modify the original array', () => {
        const originalArray = [0, 1, false];
        compact(originalArray);
        expect(originalArray).to.eql([0, 1, false]);
    });
});