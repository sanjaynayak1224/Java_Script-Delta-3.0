let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

//event bubbling
div.addEventListener("click",function(event){
    // event.stopPropagation();
    console.log("div was clicked")
})

ul.addEventListener("click",function(event){
    event.stopPropagation(); //stops event bubbling
    console.log("ul was clicked")
})

for(li of lis){
    li.addEventListener("click",function(){
        event.stopPropagation();  //stops event bubbling
        console.log("li was clicked")
    })
}