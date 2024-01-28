let todo=[];

let req=prompt("Please enter your request");

while(true){
    if(req=="quit"){
      console.log("quitting app");
      break;
    }

    if(req=="list"){
        console.log("----------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------------");
    }

    else if(req=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let index=prompt("please enter the task index");
        todo.splice(index,1);
        console.log("task deleted");
    }
    else{
        console.log("Wrong Request");
    }

    req=prompt("please enter your next request");

}


let arr=[1,2,3,4,5,6,2,3];
let num=prompt("Enter the number u want to delete");
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}

console.log(arr);


