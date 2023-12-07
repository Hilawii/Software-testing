import isBoolean from '../src/isBoolean.js';
import { expect } from 'chai';

describe('isBoolean', () => {
    it('returns true for true', () => {
        expect(isBoolean(true)).to.be.true;
    });

    it('returns true for false', () => {
        expect(isBoolean(false)).to.be.true;
    });

    it('returns true for Boolean object', () => {
        expect(isBoolean(new Boolean(true))).to.be.true;
        expect(isBoolean(new Boolean(false))).to.be.true;
    });

    it('returns false for null', () => {
        expect(isBoolean(null)).to.be.false;
    });

    it('returns false for undefined', () => {
        expect(isBoolean(undefined)).to.be.false;
    });

    it('returns false for a number', () => {
        expect(isBoolean(0)).to.be.false;
        expect(isBoolean(1)).to.be.false;
        expect(isBoolean(-1)).to.be.false;
    });

    it('returns false for a string', () => {
        expect(isBoolean('true')).to.be.false;
        expect(isBoolean('false')).to.be.false;
    });

    it('returns false for an object', () => {
        expect(isBoolean({})).to.be.false;
    });

    it('returns false for an array', () => {
        expect(isBoolean([])).to.be.false;
    });

});