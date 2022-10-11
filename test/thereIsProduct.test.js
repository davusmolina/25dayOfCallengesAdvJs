import { describe, it } from 'vitest';
import { expect } from 'chai';
import { thereIsProduct } from '../Retos/thereIsProduct';

describe('test for thereIsProduct', () => {
	it('tereIsProduct must be a function', () => {
		expect(typeof thereIsProduct).toBe('function');
	});
	it('the first argument must be a object', () => {
		expect(() => thereIsProduct(4, '')).toThrow(
			'the first argument must be a object'
		);
	});
	it('the second argument must be a string', () => {
		expect(() => thereIsProduct({ a: 0 }, 4)).toThrow(
			'the second argument must be a string'
		);
	});
	it('must return a boolean', () => {
		const res = thereIsProduct({ a: 0 }, '');
		expect(typeof res).toBe('boolean');
	});
	it('must return true if te product exists in store', () => {
		const almacen = {
			estanteria1: {
				cajon1: {
					producto1: 'coca-cola',
					producto2: 'fanta',
					producto3: 'sprite',
				},
			},
			estanteria2: {
				cajon1: 'vacio',
				cajon2: {
					producto1: 'pantalones',
					producto2: 'camiseta', // <- ¡Está aquí!
				},
			},
		};
		const case1 = thereIsProduct(almacen, 'camiseta');
		const case2 = thereIsProduct(almacen, 'pencil');
		const case3 = thereIsProduct(almacen, 'pantalones');
		expect(case1).toBe(true);
		expect(case2).toBe(false);
		expect(case3).toBe(true);
	});
	it('must return true if te product exists in store', () => {
		const otroAlmacen = {
			baul: {
				fondo: {
					objeto: 'cd-rom',
					'otro-objeto': 'disquette',
					'otra-cosa': 'mando',
				},
			},
		};
		const case1 = thereIsProduct(otroAlmacen, 'cd-rom');
		const case2 = thereIsProduct(otroAlmacen, 'gameboy');
		const case3 = thereIsProduct(otroAlmacen, 'disquette');
		expect(case1).toBe(true);
		expect(case2).toBe(false);
		expect(case3).toBe(true);
	});
});
