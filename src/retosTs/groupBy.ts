type Collection = (object | string | number)[];
type SortedBy = string | ((argument: unknown) => number | string);
interface Result {
  [key: string]: Collection;
}

function groupBy(collection: Collection, it: SortedBy): Result {
  const set: Set<number | string> = new Set();
  collection.forEach((element) => {
    if (typeof it === 'function') {
      set.add(it(element));
    } else {
      set.add(element[it as keyof typeof element]);
    }
  });
  const values = [...set];

  const obj: Record<string, Collection> = {};
  collection.forEach((elem) => {
    values.forEach((element) => {
      let res;
      if (typeof it === 'function') {
        res = it(elem);
      } else {
        res = elem[it as keyof typeof elem];
      }
      if (res === element) {
        if (Array.isArray(obj[element])) {
          obj[element].push(elem);
        } else {
          obj[element] = [elem];
        }
      }
    });
  });
  return obj;
}

export { groupBy };
