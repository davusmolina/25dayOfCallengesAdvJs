import { describe, it } from 'vitest';
import { expect } from 'chai';
import { createXmasTree } from '../Retos/createXmasTree';

describe('describe', () => {
	it('must be a function', () => {
		expect(typeof createXmasTree).toBe('function');
	});
	it('the argument must be a number', () => {
		expect(() => createXmasTree()).toThrow('the argument must be a number');
	});
	it('the argument must be a number between 1 and 100', () => {
		expect(() => createXmasTree(0)).toThrow(
			'the argument must be a number between 1 and 100'
		);
	});

	it('must return a string', () => {
		expect(typeof createXmasTree(1)).toBe('string');
	});
	it('must return equals number of lines to the  height plus two lines of te body tree trunk', () => {
		const tree = '\n__*__\n_***_\n*****\n__#__\n__#__';
		expect(createXmasTree(3)).toEqual(tree);
	});
});
