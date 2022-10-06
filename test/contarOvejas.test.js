import { expect } from 'chai';
import { describe, it } from 'vitest';
import { contarOvejas } from '../Retos/contarOvejas';

//Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
// Haz una función que devuelva una lista con todas las ovejas que sean de color rojo
// y que además su nombre contenga tanto las letras n Y a, sin importar el orden,
// las mayúsculas o espacios.

const ovejas = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' },
	{ name: 'AAAAAaaaaa', color: 'rojo' },
	{ name: 'Nnnnnnnn', color: 'rojo' },
];

describe('describe', () => {
	// Discarded test, after to reaching the final outcome

	// it('should be a function', () => {
	// 	expect(typeof contarOvejas).toBe('function');
	// });

	// const sheepsInRed = ovejas.filter((oveja) => oveja.color === 'rojo');
	// const sheepsWhitNAndA = ovejas
	// 	.filter((oveja) => oveja.name.toLowerCase().includes('a'))
	// 	.filter((oveja) => oveja.name.toLowerCase().includes('n'));
	// const filteredSheeps = contarOvejas(ovejas);

	// it('should return all sheeps in red', () => {
	// 	const ovejasRojas = filteredSheeps[0];
	// 	expect(ovejasRojas.lenght).toBe(sheepsInRed.lenght);
	// });

	// it('should return Sheeps whose name contain a and n', () => {
	// 	const numOvejasConNyA = filteredSheeps[1];
	// 	expect(numOvejasConNyA).toStrictEqual(sheepsWhitNAndA);
	// });
	it('should return sheep whit color red and name whit a and n', () => {
		const filteredSheeps = contarOvejas(ovejas);
		expect(filteredSheeps.length).eq(2);
	});
});
