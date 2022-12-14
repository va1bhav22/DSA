

/*
Input Form
arr = [[1,3],[3,4],[4,6],[6,7]]
Output Form
arr = [1,3,4,6,7]
*/

  
function duplicate_from_2D_Array(arr){
    let arr1 = arr
    let n = arr1.length;
    //console.log(arr1)
let obj = {};
for(let i=0;i<n;i++){
    let temp = arr1[i];

    for(let j = 0;j<temp.length;j++){
        obj[temp[j]] = 1;
    }
}
console.log(Object.keys(obj))

}

duplicate_from_2D_Array([[1,3],[3,4],[4,6],[6,7]])

//   only arr
for(let j = 0;j<temp.length;j++){
    obj[temp[j]] = 1;
}

console.log(Object.keys(obj))


// 