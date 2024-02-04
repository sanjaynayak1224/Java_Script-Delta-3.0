let p=document.querySelector("p");

//mouseover(similar to mouseenter but works on descendent elements too)
p.addEventListener("mouseover",function(){
    p.innerText="And iam in 1st sem";
    document.querySelector("body").style.backgroundColor="black"
    p.style.color="white"
})

//mouseout(similar to mouseleave but works on descendent elements too)
p.addEventListener("mouseout",function(){
    p.innerText="My name is sanjay";
    document.querySelector("body").style.backgroundColor="white"
    p.style.color="black"
})



//scroll function(works on both scroll up and down)
// window.addEventListener("scroll",function(){
//     console.log("the window is being scrolled");
// })


//inorder to perform specific actions specifically when scrolling up or scrolling down,we use the wheel event
window.addEventListener("wheel",function(event){
    if(event.deltaY<0){
        console.log("scrolling up");
    }
    else if(event.deltaY>0){
        console.log("scrolling down");
    }
})



//performing actions when scrolling reaches certain pixels
window.addEventListener("scroll",function(){
   if(window.scrollY>400){
    console.log("over 400px");
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.color="white";
   }
   else{
    console.log("under 400px");
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").style.color="black";
   }
})



//load event
//this changes the background color of the body everytime the pages is reloaded
window.addEventListener("load",function(){
    let RandomColor=randomColor();
    document.querySelector("body").style.backgroundColor=RandomColor;
})

function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}
