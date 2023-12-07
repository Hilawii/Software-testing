import { expect } from 'chai';
import isDate from "../src/isDate.js";

describe('isDate', () => {
    it('returns true for a Date object', () => {
        expect(isDate(new Date())).to.be.true;
    });

    it('returns false for a string', () => {
        expect(isDate('Mon April 23 2012')).to.be.false;
    });

    it('returns false for an object', () => {
        expect(isDate({})).to.be.false;
    });

    it('returns false for an array', () => {
        expect(isDate([])).to.be.false;
    });

    it('returns false for null', () => {
        expect(isDate(null)).to.be.false;
    });

    it('returns false for undefined', () => {
        expect(isDate(undefined)).to.be.false;
    });

    it('returns false for a number', () => {
        expect(isDate(123)).to.be.false;
    });

    it('returns false for a boolean', () => {
        expect(isDate(true)).to.be.false;
    });
});
