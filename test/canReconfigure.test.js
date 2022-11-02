import { describe, it } from 'vitest';
import { expect } from 'chai';
import { canReconfigure } from '../Retos/canReconfigure';

describe('tests for canReconfigure', () => {
	it('canReconfigure must be a function', () => {
		expect(typeof canReconfigure).toBe('function');
	});
	it('Both first and second argument must be a string', () => {
		expect(() => canReconfigure(2, true)).toThrow(
			'Both first and second argument must be a string'
		);
	});

	it('canReconfigure must return a boolean', () => {
		const res = canReconfigure('DMW', 'DMW');
		expect(typeof res).toBe('boolean');
	});
	it('canReconfigure must return true if the argument "to" have the same length', () => {
		expect(canReconfigure('DMW', 'KLkk')).toBe(false);
	});

	it('canReconfigure must return false if the same letter(element of first argument) is assigned to more than one character(element of second argument)', () => {
		expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
	});
	it('canReconfigure must return false if the same letter(element of first argument) is assigned to more than one character(element of second argument)', () => {
		expect(canReconfigure('MMM', 'MID')).toBe(false);
	});
	it('canReconfigure must return false if the same character is assigned to more than one letter', () => {
		expect(canReconfigure('CON', 'JUU')).toBe(false);
	});
	it('canReconfigure must return true if the argument "to" have the same length, the same character only is assigned to one letter and have to maintain the order of transformation', () => {
		expect(canReconfigure('XBOX', 'XOBX')).toBe(true);
	});
	it('canReconfigure must return true if the argument "to" have the same length, the same character only is assigned to one letter and have to maintain the order of transformation', () => {
		expect(canReconfigure('BAL', 'LIB')).toBe(true);
	});
});
