let arr = [0,0,1,3,2]
let brr = [0,4,6,5]
let crr =[]

for(let i =0 ;i<(arr.length)+(brr.length); i++)
{
    if(arr[i] !== undefined)
    {
        crr[i]=arr[i]
        console.log(crr[i]);
    }
     else(brr[i])
    {
        crr[i]=brr[i]
    }
}

console.log(crr);