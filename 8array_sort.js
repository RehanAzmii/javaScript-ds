// Array sorting  with loop

let data = [40, 30, 12, 25, 7, 90567, 99, 66, 34, 2, 99];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data.reverse());

// use bydefault method for sorting

// const res = data.sort((a, b) => {
//   return b - a;
// });
// console.log(res);
