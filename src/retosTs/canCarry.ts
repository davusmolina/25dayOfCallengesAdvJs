function canCarry(capacity: number, trips: number[][]): boolean {
  let actualLoad = 0;
  const maxPointOfDelivery = trips[trips.length - 1][2];

  for (let point = 0; point < maxPointOfDelivery; point++) {
    for (let i = 0; i < trips.length; i++) {
      const numberOfGiftsToDelivery: number = trips[i][0];
      const collectionPoint: number = trips[i][1];
      const deliveryPoint: number = trips[i][2];
      if (point === collectionPoint) {
        actualLoad += numberOfGiftsToDelivery;
      }
      if (point === deliveryPoint) {
        actualLoad -= numberOfGiftsToDelivery;
      }
      if (actualLoad > capacity) {
        return false;
      }
    }
  }

  return true;
}

export { canCarry };
