// 13. Find common elements in two arrays.


// Input:
// const a = [1, 2, 3];
// const b = [2, 3, 4];
// Output:
// [2, 3]

const a = [1, 2, 3];
const b = [2, 3, 4];


let arr =[]
let tamp=0
for(let i=0;i<=a.length-1;i++)
{
    for(let j=0;j<=b.length-1;j++)
    {
        if (a[i]==b[j])
        {
            arr[tamp]=b[j]
            tamp++
        }
    }
}

console.log(arr);