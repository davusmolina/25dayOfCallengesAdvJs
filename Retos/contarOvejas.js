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

function contarOvejas(ovejas) {
	const sheepsInRed = ovejas.filter((oveja) => oveja.color === 'rojo');
	const sheepsFiltered = sheepsInRed
		.filter((oveja) => oveja.name.toLowerCase().includes('a'))
		.filter((oveja) => oveja.name.toLowerCase().includes('n'));

	// const sheepsFiltered = [];
	// sheepsFiltered.push(sheepsInRed);
	// sheepsFiltered.push(sheepsWhitNAndA);
	return sheepsFiltered;
}

console.log(contarOvejas(ovejas));

export { contarOvejas };
