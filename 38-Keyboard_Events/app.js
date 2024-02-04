// let btn=document.querySelector("button")
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });





// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log("key= ",event.key);
//     console.log("code= ",event.code);
//     console.log("The key was pressed");
// } )
// input.addEventListener("keyup",function(){  //works when key pressed is released
//     console.log("The key was released");
// } )


let input=document.querySelector("input");
input.addEventListener("keydown",function(event){
        console.log("code= ",event.code);   //ArrowUp,ArrowDown,ArrowLeft,ArrowRight

    if(event.code=="ArrowUp"){
        console.log("character moves forward");
        document.querySelector("body").style.backgroundColor="blueviolet";
    }
    else if(event.code=="ArrowDown"){
        console.log("character moves backward");
        document.querySelector("body").style.backgroundColor="chocolate";
    }
    else if(event.code=="ArrowLeft"){
        console.log("character moves left");
        document.querySelector("body").style.backgroundColor="cyan";
    }
    else if(event.code=="ArrowRight"){
        console.log("character moves Right");
        document.querySelector("body").style.backgroundColor="mediumvioletred";
    }
    else if(event.code=="KeyY"){
        document.querySelector("body").style.backgroundColor="Yellow";
    }
    else{
        document.querySelector("body").style.backgroundColor="white";
    }
});



