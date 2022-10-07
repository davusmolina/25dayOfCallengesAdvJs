import { describe, it } from 'vitest';
import { expect } from 'chai';
import { letterIsValid } from '../retos/letterIsValid';

describe('describe', () => {
	it('letterIsValid should be a function', () => {
		expect(typeof letterIsValid).toBe('function');
	});
	it('the letter of letterIsValid must be a string', () => {
		expect(() => letterIsValid()).toThrow('The argument must be a string');
	});
	it('if the letter has [ must return false', () => {
		expect(letterIsValid('dh[')).toBe(false);
	});
	it('if the letter has { must return false', () => {
		expect(letterIsValid('dh{')).toBe(false);
	});
	it('if the letter dont have special characters return true', () => {
		const letter = 'bici coche bici coche peluche ';
		expect(letterIsValid(letter)).toBe(true);
	});
	it('if the letter have (), must check that the parentheses are not empty', () => {
		const letter = '() bici';
		expect(letterIsValid(letter)).toBe(false);
	});
	it('if the letter have ( but it dont have ) must return false', () => {
		const letter = 'bici coche (balón bici coche';
		expect(letterIsValid(letter)).toBe(false);
	});
	it('the parentheses must close correctly', () => {
		const letter = 'peluche (bici coche) bici coche balón';
		expect(letterIsValid(letter)).toBe(false);
	});
	it('letterIsValid must return a boolean', () => {
		const resLetterIsValid = letterIsValid('dh');
		expect(typeof resLetterIsValid).toBe('boolean');
	});
});
