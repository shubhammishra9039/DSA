// 8. Check if all elements are even.


// Input:
// const arr = [2, 4, 6, 8];
// Output:
// true

let arr=[2,4,6,8,3]
let flag = true
for(let i=0;i<=arr.length-1;i++)
{
    if(arr[i]%2!==0)
    {
        flag=false
    }

}

console.log(flag);
