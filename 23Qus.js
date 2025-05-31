// 20. Find missing number from a sequence.
// Input:
// const arr = [1, 2, 4, 5];
// Output:
// 3



const arr = [1, 2, 4, 5];
let missingNumber=null

for(let i=0;i<arr.length-1;i++)
{
    if(arr[i]+1 !== arr[i+1])
    {
            missingNumber=arr[i]+1
    }
}

console.log(missingNumber);





