import { describe, it } from 'vitest';
import { expect } from 'chai';
import { getMinJump } from '../Retos/getMinJump';

describe('tests for getMinJump', () => {
	it('getMinJump must be a function', () => {
		expect(typeof getMinJump).toBe('function');
	});
	it('The argument must be a array', () => {
		expect(() => getMinJump()).toThrow('The argument must be a array');
	});

	it('getMinJump must return an number', () => {
		const res = getMinJump([3, 4]);
		expect(typeof res).toBe('number');
	});

	it('Return the length of the jump', () => {
		const obstacles = [5, 3, 6, 7, 9];
		expect(getMinJump(obstacles)).toBe(4);
	});

	it('Return the length of the jump', () => {
		const obstacles = [2, 4, 6, 8, 10];
		expect(getMinJump(obstacles)).toBe(7);
	});
	it('Return the length of the jump', () => {
		const obstacles = [1, 2, 3, 5];
		expect(getMinJump(obstacles)).toBe(4);
	});
	it('Return the length of the jump', () => {
		const obstacles = [3, 7, 5];
		expect(getMinJump(obstacles)).toBe(2);
	});
	it('Return the length of the jump', () => {
		const obstacles = [9, 5, 1];
		expect(getMinJump(obstacles)).toBe(2);
	});
});
