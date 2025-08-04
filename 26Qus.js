// 23. Replace every element with its square.

// Input:
// const arr = [1, 2, 3];
// Output:
// [1, 4, 9]

const arr = [1, 2, 3];


for(let i=0 ;i<=arr.length-1;i++)
{
    let tamp =arr[i]
    tamp = tamp*tamp
    arr[i]=tamp
}

console.log(arr);