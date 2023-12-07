import { expect } from 'chai';
import add from "../src/add.js";

describe('add', () => {
    it('adds two positive numbers', () => {
        expect(add(6, 4)).to.equal(10);
    });

    it('adds two negative numbers', () => {
        expect(add(-6, -4)).to.equal(-10);
    });

    it('adds a positive and a negative number', () => {
        expect(add(-6, 4)).to.equal(-2);
    });

    it('adds zero', () => {
        expect(add(0, 0)).to.equal(0);
    });

    it('adds a number to zero', () => {
        expect(add(0, 5)).to.equal(5);
        expect(add(5, 0)).to.equal(5);
    });

});