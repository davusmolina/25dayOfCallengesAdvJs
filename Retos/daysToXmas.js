function daysToXmas(date) {
	const dateIsValid = Date.parse(date);
	console.log(dateIsValid);

	if (isNaN(dateIsValid)) {
		throw new Error('Date must be have a correct format, like dd/mm/yy');
	}

	const christmasDay = new Date('December 25, 2021');
	console.log(Date.parse(christmasDay));

	const remainingDaysMl = Date.parse(christmasDay) - dateIsValid;
	const remainingDays = Math.ceil(remainingDaysMl / 1000 / 3600 / 24);
	console.log(remainingDays);

	return remainingDays;
}
daysToXmas('Dec 25, 2021');
export { daysToXmas };
