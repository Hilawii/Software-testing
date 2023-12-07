import { expect } from 'chai';
import filter from "../src/filter.js";

describe('filter', () => {
    it('filters an array based on a predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).to.eql([{ 'user': 'barney', 'active': true }]);
    });

    it('returns an empty array when no elements match the predicate', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, number => number > 5);
        expect(result).to.eql([]);
    });

    it('handles an empty array', () => {
        expect(filter([], value => value)).to.eql([]);
    });

});
