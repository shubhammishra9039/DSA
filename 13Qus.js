// 10. Find the index of the second occurrence of a value.


// Input:
// const arr = [5, 1, 5, 2, 5];
// Output for value = 5:
// 2

let arr = [5, 1, 1, 2, 5];
let target =5
let fist = false
let second ;
for(let i=0;i<=arr.length-1;i++)
{
   if(target==arr[i] && fist)
   {
    second=i
    break
   }
   else if(target==arr[i])
   {
    fist=true
   }


    
   
}

console.log(second);