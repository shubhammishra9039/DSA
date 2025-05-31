// 21. Remove first and last element.


// Input:
// const arr = [1, 2, 3, 4];
// Output:
// [2, 3]

const arr = [1, 2, 3, 4];

for(let i=0;i<=arr.length-1;i++)
{
    if(i==0)
    {
        let teamIndex=0
     for(let j=i+1;j<=arr.length-1;j++)
     {
        let team = arr[teamIndex]
        arr[teamIndex]=arr[j]
        arr[j]=team
        teamIndex++
        
       
     }

     arr.length--

    }

    else if(i == arr.length-1)
    {
        arr.length--
    }
}


console.log(arr);