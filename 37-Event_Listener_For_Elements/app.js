// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("The Para was clicked");
// })
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     document.querySelector("body").style.backgroundColor="blue"
//     console.log("the box was entered");
// });

// box.addEventListener("mouseleave",function(){
//     document.querySelector("body").style.backgroundColor="white"
//     console.log("the box was left");
// });






// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){ //here this is nothing but "btn" itself
//     console.dir(this.innerText);
//     this.style.backgroundColor="violet";
// })

//actual use case of this,where it avoids repetition of code
let btn=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

 btn.addEventListener("click",changeColor);
 p.addEventListener("click",changeColor);
 h1.addEventListener("click",changeColor);
 h3.addEventListener("click",changeColor);

