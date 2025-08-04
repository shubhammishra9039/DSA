// 24. Find average of elements.

// Input:
// const arr = [2, 4, 6, 8];
// Output:
// 5

const arr = [2, 4, 6, 8];

let total=null
for(let i=0;i<arr.length;i++)
{

total +=arr[i]

}

console.log("Average is",(total)/arr.length);