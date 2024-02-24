function getHighestIndex(array) {
  let max = array[0];
  let maxIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

let array = [5, 21, 12, 21, 8];
console.log(getHighestIndex(array));
