// 6. Merge two arrays.

// Input:
// const a = [1, 2];
// const b = [3, 4];
// Output:
// [1, 2, 3, 4]
const a = [1, 2];
const b = [3, 4];

let arr = [];
let temp = 0;
for (let i = 0; i <= a.length + b.length - 1; i++) {
  if (i <= a.length - 1) {
    arr[i] = a[i];
  } else {
    arr[i] = b[temp];
    temp++;
  }
}

console.log(arr);
