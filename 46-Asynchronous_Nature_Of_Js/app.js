let h1=document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color="green";
// },3000);
//These above lines are just repititive and lengthy,so instead we follow the following trick:

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
       if(nextColorChange) {
        nextColorChange();
       }
    },delay)
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000);
        });
    });
});

//more readable and nesting=>callback hell
