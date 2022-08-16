const binarySearch = (array, number) => {
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.round((highIndex + lowIndex) / 2);
    let guess = array[midIndex];

    if (guess === number) return midIndex;
    if (guess < number) {
      lowIndex = midIndex + 1;
      continue
    }
      highIndex = midIndex - 1;
  }

  return -1;
}

