import { describe, it } from 'vitest';
import { expect } from 'chai';
import { countGifts } from '../Retos/listGifts';

//The function recive a str whit has a list of gifts,
//count how much of each gift there are in the list
//if the gift has _ at the beginningg of the word these gift does not count
const carta = 'bici coche balón _playstation bici coche peluche';
const res = {
	bici: 2,
	coche: 2,
	balón: 1,
	peluche: 1,
};
describe('describe', () => {
	it('should be a fuction', () => {
		expect(typeof countGifts).toBe('function');
	});
	it('the argument must be a string', () => {
		expect(() => countGifts()).toThrow('letter must be a string');
	});
	it('should return an object', () => {
		expect(typeof countGifts(carta)).toBe('object');
	});
	it('when pass letter must return res', () => {
		expect(countGifts(carta)).toStrictEqual(res);
	});
});
