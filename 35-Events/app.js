// let btn=document.querySelector("button");
// console.dir(btn);

//onclick property does only one task at a time
// // btn.onclick=function(){
// //     console.log("button was clicked");
// // }

// //or
function sayHello(){
    alert("button was clicked");
}

function sayName(){
    alert("apana college");
}
// btn.onclick=sayHello;


// let btns=document.querySelectorAll("button");
// function sayHello(){
//     alert("button was clicked");
//     console.dir(btn);
// }
// for(btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("you have entered a button");
//     }
// }




//Even listners: using this we can do multiple tasks at a time
let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    // btn.addEventListener("dblclick",function(){
    //     console.log("you double clicked");
    // });
}
