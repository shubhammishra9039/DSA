// 14. Find unique elements from two arrays.
// Input:
// const a = [1, 2, 3];
// const b = [3, 4, 5];
// Output:
// [1, 2, 4, 5]

const a = [1, 2, 3];
const b = [3, 4, 5];
let obj = {};
let tamp = 0;
for (let i = 0; i <= a.length + b.length - 1; i++) {
  if (i <= a.length - 1) {
    if (obj[a[i]] == undefined) {
      obj[a[i]] = 0;
    }
  } else {
    if (obj[b[tamp]] == undefined) {
      obj[b[tamp]] = 0;
    }
    tamp++
  }
}
let index=0
let arr =[]
for (let key in obj)
{
    arr[index]=key
    index++

}
console.log(arr);
