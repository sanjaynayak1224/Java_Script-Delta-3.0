//the style property used in here sets the inline style of the elements i.e it cant be changed ever again in css as inline style has higher priority,so this method of changing the styling is not recommended

// let heading=document.querySelector("h1");
// heading.style.color="green";
// heading.style.backgroundColor="yellow";


// let links=document.querySelectorAll("div a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color="green";
// }

//or
// for(link of links){
//     link.style.color="yellow";
// }


//to check the lit of classes given to an element
let img=document.querySelector("img");
console.log(img.classList);

let heading=document.querySelector("h1");
console.log(heading.classList);

//adding another class to an element
heading.classList.add("hello");
console.log(heading.classList);
heading.classList.add("hi" );
console.log(heading.classList);

//removing a class name of an element
heading.classList.remove("hi");
console.log(heading.classList);
heading.classList.remove("hello");
console.log(heading.classList);

//prints true or false depending on whether the specified class exists or not
console.log(heading.classList.contains("hi"));

//removes the class if it already exists,and add the class if it does not exist
heading.classList.toggle("hi"); //here it adds the class since "hi" doesnt exist
console.log(heading.classList);
console.log(heading.classList.contains("hi")); //prints true

//we have have to change the background color of the div with class "box" to yellow.so first in css file we have given background color yellow property to new non-existent class "yellowBg" (this class doesnt actually exist),so we are now gonna add this class to the div class already having another class. so the new class will be "box yellowBg".this method of changing the styling is used in place of .style method as its an inline ay of changing styling which is not recommended
let box=document.querySelector(".box");
box.classList.add("yellowBg"); //changed the background color by adding the class "yellowBg" written in the css file where background color is given to be yellow

