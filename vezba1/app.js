prom = prompt("unesi broj elemenata");
arr = [];
for (let i = 0; i < prom; i++) {
  arr[i] = prompt("unesi elemente");
}
function square(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
}
square(arr);