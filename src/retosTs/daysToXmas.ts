function daysToXmas(date: string): number {
  const ChristmasDay = new Date('December 25, 2021');
  let dateN = Date.parse(date);

  const remainingDaysMl = ChristmasDay.getTime() - dateN;
  const remainingDays = Math.ceil(remainingDaysMl / 1000 / 3600 / 24);

  return remainingDays;
}
export { daysToXmas };
