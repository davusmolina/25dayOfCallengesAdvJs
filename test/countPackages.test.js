import { describe, it } from 'vitest';
import { expect } from 'chai';
import { countPackages } from '../Retos/countPackages';

describe('tests for countPackages', () => {
	it('countPackages must be a function', () => {
		expect(typeof countPackages).toBe('function');
	});
	it('The first argument must be an array', () => {
		expect(() => countPackages(2, '')).toThrow(
			'The first argument must be an array'
		);
	});
	it('The second argument must be an string', () => {
		expect(() => countPackages([], 4)).toThrow(
			'The second argument must be a string'
		);
	});

	const carriers = [
		['dapelu', 5, ['midu', 'jelowing']],
		['midu', 2, []],
		['jelowing', 2, []],
	];
	const carriers2 = [
		['lolivier', 8, ['camila', 'jesuspoleo']],
		['camila', 5, ['sergiomartinez', 'conchaasensio']],
		['jesuspoleo', 4, []],
		['sergiomartinez', 4, []],
		['conchaasensio', 3, ['facundocapua', 'faviola']],
		['facundocapua', 2, []],
		['faviola', 1, []],
	];

	it('countPackages must return a number', () => {
		const res = countPackages(carriers, 'dapelu');
		expect(typeof res).toBe('number');
	});

	it('countPackages must return the number of package that a carrier can deliver', () => {
		expect(countPackages(carriers, 'dapelu')).toBe(9);
	});
	it('countPackages must return the number of package that a carrier can deliver', () => {
		expect(countPackages(carriers2, 'camila')).toBe(15);
	});
	it('countPackages must return the number of package that a carrier can deliver', () => {
		expect(countPackages(carriers2, 'lolivier')).toBe(27);
	});
});
