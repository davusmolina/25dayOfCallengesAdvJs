import { describe, it } from 'vitest';
import { expect } from 'chai';
import { decodeNumber } from '../Retos/decodeNumber';

describe('tests for decodeNumber', () => {
	it('decodeNumber must be a function', () => {
		expect(typeof decodeNumber).toBe('function');
	});
	it('The argument must be a string', () => {
		expect(() => decodeNumber()).toThrow('The argument must be a string');
	});
	it('decodeNumber must return a number or NaN', () => {
		const res = decodeNumber('.,1');
		expect(typeof res).toBe(NaN || 'number');
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber('...')).toBe(3);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber('.,')).toBe(4);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber(',.')).toBe(6);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber(',...')).toBe(8);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber('!!!')).toBe(300);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber('.;!')).toBe(49);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber('..,!')).toBe(95);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber('.........!')).toBe(107);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber('..,')).toBe(5);
	});

	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber(';!')).toBe(50);
	});
	it('decodeNumber must return the translate of symbols to numbers', () => {
		expect(decodeNumber('6;.')).toBe(NaN);
	});
});
