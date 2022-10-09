const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  return merge(leftArr, rightArr);
};

const merge = (leftArr, rightArr) => {
  const result = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    const min = leftArr[0] < rightArr[0] ? leftArr : rightArr;
    const mergeElem = min.shift();
    result.push(mergeElem);
  }
  return result.concat(leftArr, rightArr);
};

console.log(mergeSort([9, 3, 2, 8, 1, 6, 4])); //[1,2,3,4,6,8,9]
console.log(mergeSort([5, 0, 10, -3, -1, 4, 12, -5])); // [-5, -3, -1, 0, 4, 5, 10, 12];
