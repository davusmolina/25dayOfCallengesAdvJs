function learn(time: number, courses: number[]): [number, number] | null {
  const minorsThatTime: [[number, number], number][] = [];
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

  let betterTwoCourses: [number, number] = [-1, -1];
  let biggest = 0;

  minorsThatTime.forEach((sumTime) => {
    if (sumTime[1] > biggest) {
      biggest = sumTime[1];
      betterTwoCourses = sumTime[0];
    }
  });
  return betterTwoCourses;
}

export { learn };
