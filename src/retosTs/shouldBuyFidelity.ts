function shouldBuyFidelity(times: number): boolean {
  const BASE_TICKET = 12;
  const MEMBERSHIP = 250;

  let normalTicket = BASE_TICKET * times;
  let whitMembership = MEMBERSHIP;

  for (let i = 1; i <= times; i++) {
    let discount = BASE_TICKET;
    for (let j = 0; j < i; j++) {
      discount *= 0.75;
    }
    whitMembership += discount;
  }

  return whitMembership < normalTicket;
}
export { shouldBuyFidelity };
