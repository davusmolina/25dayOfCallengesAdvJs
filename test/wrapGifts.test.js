import { describe, it } from 'vitest';
import { expect } from 'chai';
import { wrapGifts } from '../Retos/wrapGifts';

describe('tests for wrapGifts', () => {
	it('wrapGifts must be a function', () => {
		expect(typeof wrapGifts).toBe('function');
	});
	it('The argument must be a array', () => {
		expect(() => wrapGifts()).toThrow('The argument must be a array');
	});
	it('wrapGifts must return an array', () => {
		const res = wrapGifts([]);
		expect(Array.isArray(res)).toBe(true);
	});
	it('wrapGifts must return an array', () => {
		const res = wrapGifts([]);

		expect(res).toStrictEqual([]);
	});
	it('wrapGifts must return the wrapped gifts in *', () => {
		const result = ['****', '*📷*', '*⚽️*', '****'];
		const res = wrapGifts(['📷', '⚽️']);
		expect(res).toStrictEqual(result);
	});
	it('wrapGifts must return the wrapped gifts in *', () => {
		const res = wrapGifts(['🏈🎸', '🎮🧸']);
		const result = ['******', '*🏈🎸*', '*🎮🧸*', '******'];
		expect(res).toStrictEqual(result);
	});
	it('wrapGifts must return the wrapped gifts in *', () => {
		const result = ['****', '*📷*', '****'];
		const res = wrapGifts(['📷']);
		expect(res).toStrictEqual(result);
	});
});
