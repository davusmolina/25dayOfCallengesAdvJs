type Carrier = [string, number, string[]];

function countPackages(carriers: Carrier[], carrierID: string): number {
  let numberPackages = 0;
  for (let i = 0; i < carriers.length; i++) {
    const carrier: Carrier = carriers[i];
    const carrierName: string = carrier[0];
    const carrierTeam: string[] = carrier[2];
    const carrierPackages: number = carrier[1];

    if (carrierName === carrierID) {
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
