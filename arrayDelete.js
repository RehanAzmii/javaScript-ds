// let data = [20, 30, 45, 76, 20, 80];
// let position = 3;
// for (let i = position; i < data.length - 1; i++) {
//   data[i] = data[i + 1];
// }
// data.length = data.length - 1;
// console.log(data);

let btn = document.getElementById("button").addEventListener("click", () => {
  let data = [20, 30, 45, 76, 20, 80];
  let position = document.getElementById("position").value;
  position = parseInt(position);
  for (let i = position; i < data.length - 1; i++) {
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  console.log(data);
});
