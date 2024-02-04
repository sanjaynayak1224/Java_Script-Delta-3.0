let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
});

let user=document.querySelector("#user");

user.addEventListener("change",function(){ //tracks after a complete change(tracks difference between initial change and final change)
    console.log("change event");
    console.log("final value=",this.value)
})

user.addEventListener("input",function(){ //tracks each change
    console.log("input event");
    console.log("final value=",this.value)
})




let editor=document.querySelector("#editor");
let p=document.querySelector("p");

editor.addEventListener("input",function(){
    console.log(editor.value);
    p.innerText=editor.value;
})