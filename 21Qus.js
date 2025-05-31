
// 18. Convert array to object using index as key.


// Input:
// const arr = ['a', 'b'];
// Output:
// {0: 'a', 1: 'b'}

const arr = ['a', 'b'];

let obj ={}
let tamp=0
for(let i=0;i<=arr.length-1;i++)
{
    obj[tamp]=arr[i]
    tamp++
}
console.log(obj);