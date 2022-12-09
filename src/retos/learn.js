"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.learn = void 0;
function learn(time, courses) {
    const minorsThatTime = [];
    courses.forEach((timeCourseI, i) => {
        courses.forEach((timeCourseJ, j) => {
            const sumTiTj = timeCourseI + timeCourseJ;
            if (i !== j && sumTiTj <= time) {
                minorsThatTime.push([[i, j], sumTiTj]);
            }
        });
    });
    if (minorsThatTime.length === 0) {
        return null;
    }
    let betterTwoCourses = [-1, -1];
    let biggest = 0;
    minorsThatTime.forEach((sumTime) => {
        if (sumTime[1] > biggest) {
            biggest = sumTime[1];
            betterTwoCourses = sumTime[0];
        }
    });
    return betterTwoCourses;
}
exports.learn = learn;
