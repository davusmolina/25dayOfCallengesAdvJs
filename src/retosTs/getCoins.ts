function getCoins(change: number): number[] {
  const typeOfCoins = [50, 20, 10, 5, 2, 1];
  const changeBack = [0, 0, 0, 0, 0, 0];

  typeOfCoins.forEach((coin) => {
    let remainder = change % coin;
    change -= remainder;

    if (coin === 50 && change >= 50) {
      changeBack[5] = change / coin;
    }
    if (coin === 20 && change >= 20) {
      changeBack[4] = change / coin;
    }
    if (coin === 10 && change >= 10) {
      changeBack[3] = change / coin;
    }
    if (coin === 5 && change >= 5) {
      changeBack[2] = change / coin;
    }
    if (coin === 2 && change >= 2) {
      changeBack[1] = change / coin;
    }
    if (coin === 1 && change >= 1) {
      changeBack[0] = change / coin;
    }
    change = remainder;
  });

  return changeBack;
}
export { getCoins };
