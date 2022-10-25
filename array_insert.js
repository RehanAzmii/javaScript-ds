// array insert program

// let data = [60, 30, 10, 67, 40];
// let newEl = 70;
// let position = 2;
// console.log(data);
// for (let i = data.length - 1; i >= 0; i--) {
//   //   console.log(data);
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newEl;
//     }
//   }
// }

let btn = document.getElementById("button");
btn.addEventListener("click", () => {
  let data = [60, 30, 10, 67, 40];
  let newEl = document.getElementById("newele").value;
  newEl = parseInt(newEl);
  let position = document.getElementById("position").value;
  position = parseInt(position);

  for (let i = data.length - 1; i >= 0; i--) {
    // console.log(data[i]);
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = newEl;
      }
    }
  }
  console.log(data);
});
