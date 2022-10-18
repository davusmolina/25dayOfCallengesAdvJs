import { describe, it } from 'vitest';
import { expect } from 'chai';
import { groupBy } from '../Retos/groupBy';

describe('tests for groupBy', () => {
	it('groupBy must be a function', () => {
		expect(typeof groupBy).toBe('function');
	});
	it('The first argument must be a array', () => {
		expect(() => groupBy(3, '')).toThrow('the first argument must be a array');
	});
	it('The second argument must be a string or a function', () => {
		expect(() => groupBy([], 9)).toThrow(
			'The second argument must be a string or a function'
		);
	});

	it('groupBy must return an object', () => {
		const res = groupBy([], '');
		const isObject = Object.prototype.toString.call(res) === '[object Object]';
		expect(isObject).toBe(true);
	});
	it('Return an object which keys are the values that are the result of obtain the property gived like second argument', () => {
		const collection = [
			{ title: 'JavaScript: The Good Parts', rating: 8 },
			{ title: 'Aprendiendo Git', rating: 10 },
			{ title: 'Clean Code', rating: 9 },
		];
		const result = {
			8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
			9: [{ title: 'Clean Code', rating: 9 }],
			10: [{ title: 'Aprendiendo Git', rating: 10 }],
		};
		expect(groupBy(collection, 'rating')).toStrictEqual(result);
	});
	it('Return an object which keys are the values that are the result of obtain the property gived like second argument', () => {
		const collection = [{ age: 23 }, { age: 24 }];
		const result = { 23: [{ age: 23 }], 24: [{ age: 24 }] };
		expect(groupBy(collection, 'age')).toStrictEqual(result);
	});
	it('Return an object which keys are the values that are the result of obtain the property given like second argument', () => {
		const collection = ['one', 'two', 'three'];
		const result = { 3: ['one', 'two'], 5: ['three'] };
		expect(groupBy(collection, 'length')).toStrictEqual(result);
	});
	it('Return an object which keys are the values that are the result of execute te function given like second argument', () => {
		const collection = [6.1, 4.2, 6.3];
		const result = { 6: [6.1, 6.3], 4: [4.2] };
		expect(groupBy(collection, Math.floor)).toStrictEqual(result);
	});
	it('Return an object which keys are the values that are the result of execute te function given like second argument', () => {
		const collection = [1397639141184, 1363223700000];
		const result = { 2013: [1363223700000], 2014: [1397639141184] };
		const funct = (timestamp) => new Date(timestamp).getFullYear();
		expect(groupBy(collection, funct)).toStrictEqual(result);
	});
});
