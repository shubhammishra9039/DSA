// 26. Create an array with n copies of a value.

// Input:
// const val = 'x', n = 3;
// Output:
// ['x', 'x', 'x']

const val = "x",
  n = 3;
let arr = [];

for (let i = 0; i <= n - 1; i++) {
  arr[i] = val;
}

console.log(arr);
