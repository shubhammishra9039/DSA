
let grid = [[9,1,7],[8,9,2],[3,4,6]]
var findMissingAndRepeatedValues = function(grid) {

  
let arr=[]
let count=0

for (let i=0;i<grid.length;i++)
{
    for(let j=0;j<grid[i].length;j++)
    {
        arr[count]=grid[i][j]
        count++
    }
}

console.log(arr);


for(let i=0;i<arr.length;i++)
{
for(let j=i+1;j<arr.length;j++)

    if(arr[i]>arr[j])
        {
            let teamp =arr[i]
            arr[i]=arr[j]
            arr[j]=teamp
        }
}

console.log(arr);
let num=arr[0]
let missingNumber=null
let reputedNumber=null
for(let i=0;i<arr.length-1;i++)
{
    if (arr[i] === arr[i + 1]) {
        reputedNumber = arr[i]; 
    } else if (arr[i] + 1 !== arr[i + 1]) {
        missingNumber = arr[i] + 1;
    }
   
}

if(missingNumber==null)
{
    if(arr[0]>1)
    {
        missingNumber=arr[0]-1
    }
    else 
    {

        missingNumber=arr[arr.length-1]+1
    }
}

return[reputedNumber,missingNumber]
    
};





findMissingAndRepeatedValues(grid)