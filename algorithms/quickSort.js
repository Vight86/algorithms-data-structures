const quickSort = arr => {
  if (arr.length < 2) return arr;

  const [ pivot, ...other ] = arr;
  const lesser = other.filter(item => item < pivot);
  const greater = other.filter(item => item > pivot);

  return [...quickSort(lesser), pivot, ...quickSort(greater)];
}
