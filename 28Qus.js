// 25. Convert array of key-value pairs to object.

// Input:
// const arr = [['a', 1], ['b', 2]];
// Output:
// {a: 1, b: 2}


const arr = [['a', 1], ['b', 2]];

let obj ={}

for(let i =0;i<=arr.length-1;i++)
{

    obj[arr[i][0]]=arr[i][1]


}

console.log(obj);