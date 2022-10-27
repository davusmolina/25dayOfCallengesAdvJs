import { expect } from 'chai';
import { describe, it } from 'vitest';
import { fixFiles } from '../Retos/fixFiles';

describe('describe', () => {
	it('should be a function', () => {
		expect(typeof fixFiles).toBe('function');
	});
	it('should throw a error when the parameter its not an array', () => {
		expect(() => fixFiles()).toThrow('The argument must be an array');
	});
	it('should throw a error when the second parameter its not an array of strings', () => {
		expect(() => fixFiles(['1', 2])).toThrow(
			'The second argument must be an array of strings'
		);
	});
	it('should return an array', () => {
		const res = fixFiles(['']);
		expect(Array.isArray(res)).toBe(true);
	});
	it('should return the array whit the files listed', () => {
		const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
		const fixedFiles = ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'];
		expect(fixFiles(files)).toStrictEqual(fixedFiles);
	});
	it('should return the array whit the files listed', () => {
		const files2 = ['file', 'file', 'file', 'game', 'game'];
		const fixedFiles = ['file', 'file(1)', 'file(2)', 'game', 'game(1)'];
		expect(fixFiles(files2)).toStrictEqual(fixedFiles);
	});
	it('should return the array whit the files listed', () => {
		const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
		const fixedFiles = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'];
		expect(fixFiles(files3)).toStrictEqual(fixedFiles);
	});
});
