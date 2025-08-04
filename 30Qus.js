// 27. Replace a value in array.

// Input:
// const arr = [1, 2, 3, 2];
// Replace 2 with 9
// Output:
// [1, 9, 3, 9]

const arr = [1, 2, 3, 2];

for (let i=0;i<=arr.length-1;i++)
{
    if(arr[i]==2)
    {
        arr[i]=9
    }
}

console.log(arr);