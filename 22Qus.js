// 19. Find second largest number.
// Input:
// const arr = [5, 3, 9, 7];
// Output:
// 7

const arr = [5, 3, 9, 7];

let maxNumber = 0;
let secondMax = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  if (maxNumber <= arr[i]) {
    maxNumber = arr[i];
  }else if (secondMax<=arr[i] && secondMax<maxNumber)
  {
    secondMax=arr[i]
  }
}


console.log(maxNumber,secondMax);