// 9. Count occurrences of a value.
// Input:
// const arr = [1, 2, 2, 3, 2];
// Output for value = 2:
// 3

let arr = [1, 2, 2, 3, 2];
let obj = {};

for (let i = 0; i <= arr.length - 1; i++) {
  
  let count = 0;
  
  for (let j = 0; j <= arr.length - 1; j++) {

    if (arr[i] == arr[j]) {

      if (obj[arr[i]]) {
        count++;
        obj[arr[i]] = count;
      } 
      
      else {
        obj[arr[i]] = count;
      }
    }
  }
}

console.log(obj);
//pending
