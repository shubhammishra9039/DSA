// 11. Filter even numbers.


// Input:
// const arr = [1, 2, 3, 4, 5];
// Output:
// [2, 4]

const arr = [1, 2, 3, 4, 5];

let brr =[]
let tamp=0
for (let i=0; i<arr.length-1;i++)
{
    if(arr[i]%2==0)
    {
        brr[tamp]=arr[i]
        tamp++

    }
}

console.log(brr);