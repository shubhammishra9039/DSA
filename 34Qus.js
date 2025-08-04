
// 1. Reverse an array.


// Input:
// const arr = [1, 2, 3, 4, 5];
// Output:
// [5, 4, 3, 2, 1]


const reverseArray = (arr)=>{
    let brr=[]
    let count=0
    for(i=arr.length-1;i>=0;i--)
    {
        brr[count]=arr[i]
        count++;
    }

    return brr

}


const reverseArrayResult = reverseArray([1,2,3])

console.log(reverseArrayResult);