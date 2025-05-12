// 4. Find the maximum value in an array.


// Input:
// const arr = [3, 5, 7, 2, 8];
// Output:
// 8

let arr =[3,5,7,2,8]
let MaxElement =0
for(let i=0;i<=arr.length-1;i++)
{
    if(arr[i]>MaxElement)
    {
        MaxElement=arr[i]
    }
}

console.log(MaxElement);
