import { describe, it } from 'vitest';
import { expect } from 'chai';
import { shouldBuyFidelity } from '../Retos/shouldBuyFidelity';

describe('tests for shouldBuyFidelity', () => {
	it('shouldBuyFidelity must be a function', () => {
		expect(typeof shouldBuyFidelity).toBe('function');
	});
	it('The argument must be a number', () => {
		expect(() => shouldBuyFidelity()).toThrow('The argument must be a number');
	});

	it('shouldBuyFidelity must return an boolean', () => {
		const res = shouldBuyFidelity(2);
		expect(typeof res).toBe('boolean');
	});

	it('Return true in case that buy a membership is better', () => {
		expect(shouldBuyFidelity(100)).toBe(true);
	});

	it('Return true in case that buy a membership is worse', () => {
		expect(shouldBuyFidelity(1)).toBe(false);
	});
});
