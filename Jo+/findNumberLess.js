let data = [
  3,
  2,
  14,
  15,
  13,
  17,
  20,
  8,
  9,
  10,
  6,
  15,
  5,
  33,
  25,
  13,
  16,
  19,
  30,
  33,
  11,
  35
];

function findNumberLess(data) {
  let divide = Math.ceil(data.length / 2);
  if (divide > 1) {
    // console.log("data top->>", data);
    let fieldOne = findNumberLess(data.slice(0, divide));
    // console.log("fieldOne->>", fieldOne);
    let fieldTwo = findNumberLess(data.slice(divide, data.length));
    // console.log("fieldTwo->>", fieldTwo);
    let result = findNumberLess([fieldOne, fieldTwo]);
    // console.log("result->>", result);
    return result;
  } else {
    // console.log("data bottom->>", data);
    if (data[1] <= data[0]) {
      return data[1];
    } else {
      return data[0];
    }
  }
}

console.time();
findNumberLess(data);
console.timeEnd();

console.log("----------");

console.time();
let NumberLess = data[0];
for (let index in data) {
  if (data[index] < NumberLess) {
    NumberLess = data[index];
  }
}
console.timeEnd();
console.log("NumberLess->>", NumberLess);
