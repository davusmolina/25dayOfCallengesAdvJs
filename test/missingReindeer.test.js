import { describe, it } from 'vitest';
import { expect } from 'chai';
import { missingReindeer } from '../Retos/missingReindeer';

describe('tests for missingReindeer', () => {
	it('missingReindeer must be a function', () => {
		expect(typeof missingReindeer).toBe('function');
	});
	it('The argument must be an array', () => {
		expect(() => missingReindeer()).toThrow('The argument must be an array');
	});
	it('The ids must be greater than 0 or smaller at 101', () => {
		expect(() => missingReindeer([121, -1])).toThrow(
			'The ids must be greater than 0 or smaller at 101'
		);
	});
	it('missingReindeer must return a number', () => {
		const res = missingReindeer([1, 2]);
		expect(typeof res).toBe('number');
	});
	it('missingReindeer must return the id of the missing reindeer', () => {
		const res = missingReindeer([0, 2, 3]);
		expect(res).toBe(1);
	});
	it('missingReindeer must return the id of the missing reindeer', () => {
		const res = missingReindeer([5, 6, 1, 2, 3, 7, 0]);
		expect(res).toBe(4);
	});
	it('missingReindeer must return the id of the missing reindeer', () => {
		const res = missingReindeer([0, 1]);
		expect(res).toBe(2);
	});
	it('missingReindeer must return the id of the missing reindeer', () => {
		const res = missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]);
		expect(res).toBe(8);
	});
	it('missingReindeer must return the id of the missing reindeer', () => {
		const res = missingReindeer([3, 0, 1]);
		expect(res).toBe(2);
	});
	it('missingReindeer must return the id of the missing reindeer', () => {
		const res = missingReindeer([0]);
		expect(res).toBe(1);
	});
});
