"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countPackages = void 0;
function countPackages(carriers, carrierID) {
    let numberPackages = 0;
    for (let i = 0; i < carriers.length; i++) {
        const carrier = carriers[i];
        const carrierName = carrier[0];
        const carrierTeam = carrier[2];
        const carrierPackages = carrier[1];
        if (carrierName === carrierID) {
            numberPackages += carrierPackages;
            if (carrierTeam.length === 0) {
                return numberPackages;
            }
            else {
                carrierTeam.forEach((newCarrierID) => {
                    numberPackages += countPackages(carriers, newCarrierID);
                });
            }
        }
    }
    return numberPackages;
}
exports.countPackages = countPackages;
