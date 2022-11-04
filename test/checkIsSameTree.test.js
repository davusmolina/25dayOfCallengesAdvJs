import { describe, it } from 'vitest';
import { expect } from 'chai';
import { checkIsSameTree } from '../Retos/checkIsSameTree';

describe('tests for checkIsSameTree', () => {
	it('checkIsSameTree must be a function', () => {
		expect(typeof checkIsSameTree).toBe('function');
	});
	it('Both the first and the second argument must be an object', () => {
		expect(() => checkIsSameTree(2, true)).toThrow(
			'Both the first and the second argument must be an object'
		);
	});

	it('checkIsSameTree must return a boolean', () => {
		const res = checkIsSameTree({}, {});
		expect(typeof res).toBe('boolean');
	});
	const tree = {
		value: 1,
		left: { value: 2, left: null, right: null },
		right: { value: 3, left: null, right: null },
	};
	const tree2 = {
		value: 1,
		left: {
			value: 3,
			left: { value: 2, left: null, right: null },
			right: null,
		},
		right: {
			value: 5,
			left: null,
			right: { value: 4, left: null, right: null },
		},
	};
	it('checkIsSameTree must return true if both trees are equals', () => {
		expect(checkIsSameTree(tree, tree)).toBe(true);
	});
	it('checkIsSameTree must return true if both trees are equals', () => {
		expect(checkIsSameTree(tree2, tree2)).toBe(true);
	});
	it('checkIsSameTree must return false if both trees are not equals', () => {
		expect(checkIsSameTree(tree, tree2)).toBe(false);
	});
});
