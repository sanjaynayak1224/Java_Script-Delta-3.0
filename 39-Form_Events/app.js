let form=document.querySelector("form");

// form.addEventListener("submit",function(){
//     alert("form submitted");
// })

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted");
// })


form.addEventListener("submit",function(event){
    event.preventDefault();

    let user=document.querySelector("#text");  //or this.elements[0] or form.elements[0]
    console.dir(user);
    console.dir(user.value);

    let password=document.querySelector("#password");  //or this.elements[1] or form.elements[1]
    console.dir(password);
    console.dir(password.value);

    alert(`hi ${user.value},your password is set to ${password.value}`);
});