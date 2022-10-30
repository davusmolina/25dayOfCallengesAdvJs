import { describe, it } from 'vitest';
import { expect } from 'chai';
import { countDecorations } from '../Retos/countDecorations';

describe('tests for countDecorations', () => {
	it('countDecorations must be a function', () => {
		expect(typeof countDecorations).toBe('function');
	});
	it('The argument must be an object', () => {
		expect(() => countDecorations()).toThrow('The argument must be a object');
	});

	it('countDecorations must return a number', () => {
		const res = countDecorations({
			value: 1,
			left: null,
			right: null,
		});
		expect(typeof res).toBe('number');
	});
	it('countDecorations must return the number of decorations that the Christmas tree need', () => {
		const tree = {
			value: 1,
			left: {
				value: 2,
				left: null,
				right: null,
			},
			right: {
				value: 3,
				left: null,
				right: null,
			},
		};
		expect(countDecorations(tree)).toBe(6);
	});
	it('countDecorations must return the number of decorations that the Christmas tree need', () => {
		const bigTree = {
			value: 1,
			left: {
				value: 5,
				left: {
					value: 7,
					left: {
						value: 3,
						left: null,
						right: null,
					},
					right: null,
				},
				right: null,
			},
			right: {
				value: 6,
				left: {
					value: 5,
					left: null,
					right: null,
				},
				right: {
					value: 1,
					left: null,
					right: null,
				},
			},
		};
		expect(countDecorations(bigTree)).toBe(28);
	});
});
