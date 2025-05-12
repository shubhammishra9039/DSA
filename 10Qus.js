// 7. Rotate array to the right by 2 steps.

// Input:
// const arr = [1, 2, 3, 4, 5];
// Output:
// [4, 5, 1, 2, 3]

let arr = [1, 2, 3, 4, 5];

let j = arr.length-1 ;
for (let i = 0; i <= arr.length-1; i++) {

  let tamp = arr[i];
  arr[i] = arr[j];
  arr[j] = tamp;
 
  if (i == j) {
    break;
  }

  j--;
}

console.log(arr);
