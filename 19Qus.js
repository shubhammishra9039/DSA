// 16. Chunk an array into smaller arrays.

// Input:
// const arr = [1, 2, 3, 4, 5];
// chunk size = 2
// Output:
// [[1, 2], [3, 4], [5]]

const arr = [1, 2, 3, 4, 5];
let fullArray = [];
let tamp = 0;
let sizeOfChunk = 4;
let tampArr = [];
let tampLength = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  if (tampArr.length < sizeOfChunk) {
    tampArr[tampLength] = arr[i];
    tampLength++;
    if (i == arr.length - 1) {
      fullArray[tamp] = tampArr;
    
      
      break;
    }
  } else {
    fullArray[tamp] = tampArr;
    tamp++;
    tampArr = [];
    tampLength = 0;
    i--;
  }
}

console.log(fullArray);