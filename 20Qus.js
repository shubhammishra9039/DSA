// 17. Find the longest string in an array.


// Input:
// const arr = ["a", "abcd", "abc"];
// Output:
// "abcd"

const arr = ["a", "abcd", "abc"];
let maxLength=0
let longestString=""

for(let i=0;i<=arr.length-1;i++)
{
    if (maxLength<arr[i].length)
    {
        maxLength=arr[i].length
        longestString=arr[i]

    }

}

console.log(maxLength,longestString);