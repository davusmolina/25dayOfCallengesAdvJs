import { expect } from 'chai';
import { describe, it } from 'vitest';
import { pangram } from '../Retos/pangram';

describe('describe', () => {
	it('should be a function', () => {
		expect(typeof pangram).toBe('function');
	});
	it('should throw a error when the parameter its not a string', () => {
		expect(() => pangram()).toThrow('The parameter must be a string');
	});
	it('should return true if the letter has all the characters', () => {
		const res = pangram(' sd');
		expect(typeof res).toBe('boolean');
	});

	it('should return true if the letter has all the characters', () => {
		const letter =
			'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!';
		expect(pangram(letter)).toBe(true);
	});
	it('should return true if the letter has all the characters', () => {
		const letter = 'Extraño pan de col y kiwi se quemó bajo fugaz vaho';
		expect(pangram(letter)).toBe(true);
	});
	it('should return false if the letter does not have all the characters', () => {
		const letter =
			'Esto es una frase larga pero no tiene todas las letras del abecedario';
		expect(pangram(letter)).toBe(false);
	});
	it('should return false if the letter does not have all the characters', () => {
		const letter = 'De la a a la z, nos faltan letras';
		expect(pangram(letter)).toBe(false);
	});
});
