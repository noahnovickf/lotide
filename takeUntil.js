const takeUntil = function(arr, cb) {
  let newArr = [];
  for (let item of arr) {
    if (cb(item) === false) {
      newArr.push(item);
    } else {
      break;
    }
  }
  return newArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);
