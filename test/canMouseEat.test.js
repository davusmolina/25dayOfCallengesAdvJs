import { describe, it } from 'vitest';
import { expect } from 'chai';
import { canMouseEat } from '../Retos/canMouseEat';

describe('test for canMouseEat', () => {
	it('canMouseEat must be a function', () => {
		expect(typeof canMouseEat).toBe('function');
	});
	it('The first argument must be a string', () => {
		expect(() => canMouseEat(2, [])).toThrow(
			'The first argument must be a string'
		);
	});
	it('The second argument must be an array', () => {
		expect(() => canMouseEat('', 2)).toThrow(
			'The second argument must be an array'
		);
	});
	const room = [
		[' ', ' ', ' '],
		[' ', ' ', 'm'],
		[' ', ' ', '*'],
	];
	const room2 = [
		['*', ' ', ' ', ' '],
		[' ', 'm', '*', ' '],
		[' ', ' ', ' ', ' '],
		[' ', ' ', ' ', '*'],
	];
	it('must return a boolean', () => {
		const res = canMouseEat('up', room);
		expect(typeof res).toBe('boolean');
	});
	it('must return false if the mouse move on and there is not food(*)', () => {
		expect(canMouseEat('left', room)).toBe(false);
		expect(canMouseEat('up', room)).toBe(false);
		expect(canMouseEat('right', room)).toBe(false);
		expect(canMouseEat('left', room2)).toBe(false);
		expect(canMouseEat('down', room2)).toBe(false);
		expect(canMouseEat('up', room2)).toBe(false);
	});
	it('must return true if the mouse move on and there is food(*)', () => {
		expect(canMouseEat('down', room)).toBe(true);
		expect(canMouseEat('right', room2)).toBe(true);
	});
});
