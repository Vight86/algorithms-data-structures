const findSmallestIndex = arr => arr.indexOf(Math.min(...arr));

const selectionSort = arr => {
  const sortedArr = [];
  while (arr.length > 0) {
    const smallestIndex = findSmallestIndex(arr);
    sortedArr.push(...arr.splice(smallestIndex, 1));
  }
  return sortedArr;
}
