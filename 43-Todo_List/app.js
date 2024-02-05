let input=document.querySelector("input");
let btn=document.querySelector("button");
let ol=document.querySelector("ol");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ol.appendChild(item);
    console.log(input.value);
    input.value="";
    

})


ol.addEventListener("click",function(event){
    console.log(event.target);
    console.log(event.target.nodeName);
    // let task=event.target;  //doesnt work
    // let parent=task.parentElement;
    // parent.remove();
    if(event.target.nodeName=="BUTTON"){
        let task=event.target.parentElement
        task.remove();
    }
})

