function countPackages(carriers, carrierID) {
	if (!Array.isArray(carriers)) {
		throw new Error('The first argument must be an array');
	}
	if (typeof carrierID !== 'string') {
		throw new Error('The second argument must be a string');
	}

	let numberPackages = 0;
	for (let i = 0; i < carriers.length; i++) {
		const carrier = carriers[i];

		const id = carrier[0];
		const carrierTeam = carrier[2];
		const carrierPackages = carrier[1];

		if (id === carrierID) {
			numberPackages += carrierPackages;
			if (carrierTeam.length === 0) {
				return numberPackages;
			} else {
				carrierTeam.forEach((newCarrierID) => {
					numberPackages += countPackages(carriers, newCarrierID);
				});
			}
		}
	}
	return numberPackages;
}
export { countPackages };
