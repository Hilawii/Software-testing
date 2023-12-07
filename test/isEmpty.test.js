import { expect } from 'chai';
import isEmpty from "../src/isEmpty.js";

describe('isEmpty', () => {
    it('returns true for null', () => {
        expect(isEmpty(null)).to.be.true;
    });

    it('returns true for undefined', () => {
        expect(isEmpty(undefined)).to.be.true;
    });

    it('returns true for an empty object', () => {
        expect(isEmpty({})).to.be.true;
    });

    it('returns false for a non-empty object', () => {
        expect(isEmpty({ 'a': 1 })).to.be.false;
    });

    it('returns true for an empty array', () => {
        expect(isEmpty([])).to.be.true;
    });

    it('returns false for a non-empty array', () => {
        expect(isEmpty([1, 2, 3])).to.be.false;
    });

    it('returns true for an empty string', () => {
        expect(isEmpty('')).to.be.true;
    });

    it('returns false for a non-empty string', () => {
        expect(isEmpty('abc')).to.be.false;
    });

    it('returns true for a boolean', () => {
        expect(isEmpty(true)).to.be.true;
        expect(isEmpty(false)).to.be.true;
    });

    it('returns true for a number', () => {
        expect(isEmpty(1)).to.be.true;
    });

    it('returns true for an empty Map', () => {
        expect(isEmpty(new Map())).to.be.true;
    });

    it('returns false for a non-empty Map', () => {
        expect(isEmpty(new Map([['key', 'value']]))).to.be.false;
    });

    it('returns true for an empty Set', () => {
        expect(isEmpty(new Set())).to.be.true;
    });

    it('returns false for a non-empty Set', () => {
        expect(isEmpty(new Set([1]))).to.be.false;
    });

});
