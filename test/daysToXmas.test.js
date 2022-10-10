import { describe, it } from 'vitest';
import { expect } from 'chai';
import { daysToXmas } from '../Retos/daysToXmas';

describe('describe', () => {
	it('must be a function', () => {
		expect(typeof daysToXmas).toBe('function');
	});
	it('Date must be have a correct format, like dd/mm/yy', () => {
		expect(() => daysToXmas()).toThrow(
			'Date must be have a correct format, like dd/mm/yy'
		);
	});
	it('must return a number', () => {
		const res = daysToXmas('Dec 1, 2021');
		expect(typeof res).toBe('number');
	});
	it('te number of days is not correct', () => {
		expect(daysToXmas('Dec 1, 2021')).toBe(24);
		expect(daysToXmas('Dec 24, 2021')).toBe(1);
		expect(daysToXmas('Dec 24, 2021 23:59:59')).toBe(1);
		expect(daysToXmas('Dec 25, 2021')).toBe(0);
		expect(daysToXmas('Dec 26, 2021 23:59:59')).toBe(-1);
	});
});
