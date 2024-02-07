h1=document.querySelector("h1");


function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color Changed!");
        },delay);
    });
}


changeColor("red",1000)
.then((result)=>{
    console.log("Red Color was completed");
    console.log("Result of the promise:",result)
    return changeColor("orange",1000);
})
.then((result)=>{
    console.log("Orange Color was completed");
    console.log("Result of the promise:",result)
    return changeColor("blue",1000);
})
.then((result)=>{
    console.log("Blue Color was completed");
    console.log("Result of the promise:",result);
    return changeColor("crimson",1000);
})
.catch((errpr)=>{
    console.log("Color wasnt completed");
    console.log("Error of the promise:",result)
});