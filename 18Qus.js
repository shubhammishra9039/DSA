// 15. Remove falsy values from an array.


// Input:
// const arr = [0, "a", "", false, 5];
// Output:
// ["a", 5]

const arr = [0, "a", "", false, 5];

for(let i =0;i<=arr.length-1;i++)
{
    if(!arr[i])
    {
        let tamp =arr[arr.length-1]
        arr[arr.length-1]=arr[i]
        arr[i]=tamp
        arr.length--


    }
    else{
        if(!arr[arr.length-1])
        {
            arr.length--
        }
    }
    
    
}
console.log(arr);