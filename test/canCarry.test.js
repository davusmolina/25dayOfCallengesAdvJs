import { describe, it } from 'vitest';
import { expect } from 'chai';
import { canCarry } from '../Retos/canCarry';

describe('tests for canCarry', () => {
	it('canCarry must be a function', () => {
		expect(typeof canCarry).toBe('function');
	});
	it('The first argument must be an array', () => {
		expect(() => canCarry('', [])).toThrow(
			'The first argument must be a number'
		);
	});
	it('The second argument must be an array', () => {
		expect(() => canCarry(2, '')).toThrow(
			'The second argument must be an array'
		);
	});
	it('canCarry must return a boolean', () => {
		const res = canCarry(3, [1, 2, 3]);
		expect(typeof res).toBe('boolean');
	});
	it('canCarry must return false if the trip exceed the maximum capacity sled', () => {
		expect(
			canCarry(4, [
				[2, 5, 8],
				[3, 6, 10],
			])
		).toBe(false);
	});
	it('canCarry must return true if the trip never exceed the maximum capacity sled', () => {
		expect(
			canCarry(3, [
				[1, 1, 5],
				[2, 2, 10],
			])
		).toBe(true);
	});
	it('canCarry must return true if the trip never exceed the maximum capacity sled', () => {
		expect(
			canCarry(3, [
				[2, 1, 5],
				[3, 5, 7],
			])
		).toBe(true);
	});
	it('canCarry must return false if the trip exceed the maximum capacity sled', () => {
		expect(canCarry(1, [[2, 3, 8]])).toBe(false);
	});
});
