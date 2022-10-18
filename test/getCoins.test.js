import { expect } from 'chai';
import { describe, it } from 'vitest';
import { getCoins } from '../Retos/getCoins';

describe('tests for getCoins', () => {
	it('getCoins must be a function', () => {
		expect(typeof getCoins).toBe('function');
	});
	it('The argument must be a number', () => {
		expect(() => getCoins()).toThrow('The argument must be a number');
	});
	it('getCoins must return an array', () => {
		const res = getCoins(34);
		expect(Array.isArray(res)).toBe(true);
	});
	it('The number of coins is not correct', () => {
		expect(getCoins(51)).toStrictEqual([1, 0, 0, 0, 0, 1]);
		expect(getCoins(3)).toStrictEqual([1, 1, 0, 0, 0, 0]);
		expect(getCoins(5)).toStrictEqual([0, 0, 1, 0, 0, 0]);
		expect(getCoins(16)).toStrictEqual([1, 0, 1, 1, 0, 0]);
		expect(getCoins(100)).toStrictEqual([0, 0, 0, 0, 0, 2]);
	});
});
