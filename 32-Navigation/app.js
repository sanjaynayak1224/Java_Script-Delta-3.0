//printing the parent of the h4 tag i.e the div with the class "box"
let h4=document.querySelector("h4");
console.log(h4.parentElement);
console.dir(h4.parentElement);

//printing the children of the div with the class "box"
let box=document.querySelector(".box");
console.log(box.children);
console.dir(box.children);

//counting the number of children of the div with class "box"
console.log(box.childElementCount);
console.dir(box.childElementCount);

//counting the number of children of ul which is inside the div with class "box"

let ul=document.querySelector(".box ul");
console.log(ul.childElementCount);
console.dir(ul.childElementCount);
console.log(ul.children);


//printing previous siblings and next siblings
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log("previous sibling of ul.children[1]",ul.children[1].previousElementSibling);
console.log("next sibling of ul.children[1]",ul.children[1].nextElementSibling);


//changing the styling the h1 tag which comes before img using previous sibling property
let img=document.querySelector("img");
let heading=img.previousElementSibling;
console.log(heading);
heading.style.color="purple";

