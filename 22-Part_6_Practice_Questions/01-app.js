let arr=[5,1000,6,8,9,23,540,580];


function elements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}


elements(arr,50);