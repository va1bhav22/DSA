/*
You are given an array of N-1 integers and integers are in the range of 1 to N.
 There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer
Note : You have to take the input yourself
Sample Input 1 
4 5 1 3
Sample Output 1
2
*/

function Missing(arr){
    //arr-->[4 5 1 3]
    let n = arr.length;
    let sum = ((n+1)*(n+2))/2

    for(let i=0;i<n;i++){
        sum -= arr[i];
    }
    console.log(sum)

}

Missing([4,5,1,3])