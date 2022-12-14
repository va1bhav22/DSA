function findSecondLargestElem(arr){
    let f=-1 ,s=-1;
    
    for(var i=0;i<arr.length-1;i++)
    {
        if(arr[i]>f)
        {
            s=f
            f=arr[i]
        }
        else if(arr[i]>s && arr[i]!=f){
            s=arr[i]
        }
    }
    console.log(s)
 }
 let arr = [12, 35, 1, 10, 34, 1,44,5,4,53,21,67,87,]
 findSecondLargestElem(arr);