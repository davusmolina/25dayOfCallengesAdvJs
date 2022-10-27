import { expect } from 'chai';
import { describe, it } from 'vitest';
import { learn } from '../Retos/learn';

describe('describe', () => {
	it('should be a function', () => {
		expect(typeof learn).toBe('function');
	});
	it('should throw a error when the first parameter is not a number', () => {
		expect(() => learn('', [])).toThrow('The first argument must be a number');
	});
	it('should throw a error when the second parameter is not an array', () => {
		expect(() => learn(41, '')).toThrow('The second argument must be an array');
	});
	it('should throw a error when the second parameter is not an array of numbers', () => {
		expect(() => learn(41, ['1', 2])).toThrow(
			'The second argument must be an array of numbers'
		);
	});

	it('should return an array of two elements or null', () => {
		const res = learn(10, [1, 4, 5]);
		expect(Array.isArray(res)).toBe(true);
		expect(res.length).toBe(2);
	});
	it('should return an array whit the two longest courses which sum is lower that the time of the student', () => {
		expect(learn(10, [2, 3, 8, 1, 4])).toStrictEqual([0, 2]);
	});
	it('should return an array whit the two longest courses which sum is lower that the time of the student', () => {
		expect(learn(15, [2, 10, 4, 1])).toStrictEqual([1, 2]);
	});
	it('should return an array whit the two longest courses which sum is lower that the time of the student', () => {
		expect(learn(25, [10, 15, 20, 5])).toStrictEqual([0, 1]);
	});
	it('should return null if there are no two courses that sum less that time', () => {
		expect(learn(4, [10, 14, 20])).toBe(null);
	});
	it('should return null if there are no two courses that sum less that time', () => {
		expect(learn(5, [5, 5, 5])).toBe(null);
	});
});
