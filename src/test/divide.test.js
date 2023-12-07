import { expect } from 'chai';
import divide from "../divide.js";

describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
        expect(divide(6, 3)).to.equal(2);
    });

    it('should divide two negative numbers correctly', () => {
        expect(divide(-6, -3)).to.equal(2);
    });

    it('should handle division by zero', () => {
        expect(divide(6, 0)).to.equal(NaN);
    });

    it('should handle zero divided by a number', () => {
        expect(divide(0, 5)).to.equal(0);
    });

    it('should handle division of negative and positive numbers', () => {
        expect(divide(-6, 3)).to.equal(-2);
        expect(divide(6, -3)).to.equal(-2);
    });

    it('should return NaN for non-numeric inputs', () => {
        expect(divide('a', 3)).to.be.NaN;
        expect(divide(3, 'b')).to.be.NaN;
    });
});