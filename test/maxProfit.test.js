import { describe, it } from 'vitest';
import { expect } from 'chai';
import { maxProfit } from '../Retos/maxProfit';

describe('test for maxProfit', () => {
	it('maxProfit should be a function', () => {
		expect(typeof maxProfit).toBe('function');
	});
	it('the prices of maxProfit must be a array', () => {
		expect(() => maxProfit()).toThrow('The argument must be an array');
	});
	it('the prices of maxProfit must be a array of numbers', () => {
		expect(() => maxProfit([3, 'j', 'j'])).toThrow(
			'The argument must be an array of numbers'
		);
	});
	it('maxProfit must return a number', () => {
		const res = maxProfit([1, 4, 4]);
		expect(typeof res).toBe('number');
	});
	it('must return the correct profit', () => {
		const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
		const pricesEth = [10, 20, 30, 40, 50, 60, 70];

		expect(maxProfit(pricesBtc)).toBe(16);
		expect(maxProfit(pricesEth)).toBe(60);
	});
	it('must return -1 when there is not profit', () => {
		const pricesDoge = [18, 15, 12, 11, 9, 7];
		const pricesAda = [3, 3, 3, 3, 3];
		const pricesNano = [6, 5, 4, 3];

		expect(maxProfit(pricesDoge)).toBe(-1);
		expect(maxProfit(pricesAda)).toBe(-1);
		expect(maxProfit(pricesNano)).toBe(-1);
	});
});
