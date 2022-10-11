import { describe, it } from 'vitest';
import { expect } from 'chai';
import { sumPairs } from '../Retos/sumPairs';

describe('describre', () => {
	it('sumPairs must be a function', () => {
		expect(typeof sumPairs).toBe('function');
	});
	it('the first parameter must be a array', () => {
		expect(() => sumPairs(3, 3)).toThrow('the first parameter must be a array');
	});
	it('the first parameter must be a array of numbers', () => {
		expect(() => sumPairs(['3', 3, 4], 3)).toThrow(
			'the first parameter must be a array of numbers'
		);
	});
	it('the second parameter must be a number', () => {
		expect(() => sumPairs([1, 2, 3], 'j')).toThrow(
			'the second parameter must be a number'
		);
	});
	it('must return a array', () => {
		const res = sumPairs([1, 3, 4, 6], 4);
		expect(Array.isArray(res)).toBe(true);
	});
	it('the length of the response must be 2', () => {
		const res = sumPairs([1, 3, 4, 6], 4);
		expect(res.length).toBe(2);
	});
	it('the two numbers of the response must sum the number of the second parameter', () => {
		expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7]);
		expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2]);
		expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5]);
		expect(sumPairs([-3, -2, 7, -5], 10)).toBe(null);
	});
});
