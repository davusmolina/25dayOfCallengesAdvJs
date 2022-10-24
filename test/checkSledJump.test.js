import { describe, it } from 'vitest';
import { expect } from 'chai';
import { checkSledJump } from '../Retos/checkSledJump';

describe('tests for checkSledJump', () => {
	it('checkSledJump must be a function', () => {
		expect(typeof checkSledJump).toBe('function');
	});
	it('The argument must be an array', () => {
		expect(() => checkSledJump()).toThrow('The argument must be an array');
	});
	it('The length array must be greater than 2', () => {
		expect(() => checkSledJump([121, 1])).toThrow(
			'The length array must be greater than 2'
		);
	});
	it('checkSledJump must return a boolean', () => {
		const res = checkSledJump([1, 2, 3, 2, 1]);
		expect(typeof res).toBe('boolean');
	});
	it('checkSledJump must return a true if the numbers go up and down in the right way', () => {
		expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true);
		expect(checkSledJump([0, 1, 0])).toBe(true);
		expect(checkSledJump([0, 3, 2, 1])).toBe(true);
		expect(checkSledJump([0, 1000, 1])).toBe(true);
	});
	it('checkSledJump must return a false if the numbers do not go up and down in the right way', () => {
		expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false);
	});
	it('checkSledJump must return a false if the numbers do not go up and down in the right way', () => {
		expect(checkSledJump([1, 2, 3])).toBe(false);
	});
	it('checkSledJump must return a false if the numbers do not go up and down in the right way', () => {
		expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false);
	});
});
