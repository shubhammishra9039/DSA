// 22. Find intersection without duplicates.


// Input:
// const a = [1, 2, 2, 3];
// const b = [2, 2, 3];
// Output:
// [2, 3]

const a = [1, 2, 2, 3];
const b = [2, 2, 3];
let obj={}

for(let i = 0 ; i<=a.length-1;i++)
{
    for(let j= 0;j<=b.length-1;j++)
    {
       if( a[i]==b[j])
        {
            obj[a[i]]=0
            
        }
    }
}

console.log(obj);

let arr=[]
let tempIndex=0
for(let key in obj)
{
    arr[tempIndex]=key
    tempIndex++
}

console.log(arr);