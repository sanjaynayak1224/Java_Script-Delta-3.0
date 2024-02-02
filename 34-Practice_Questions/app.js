// let p1=document.createElement("p");
// p1.innerText="Hey iam red";
// p1.classList.add("para1");
// p1.classList.add("para2");

// let body=document.querySelector("body");
// body.appendChild(p1);

// let h3=document.createElement("h3");
// h3.innerText="iam a blue h3";
// h3.classList.add("heading3");

// body.append(h3);

// let div=document.createElement("div");
// body.append(div);
// div.classList.add("box");


// let h1=document.createElement("h1");
// h1.innerText="Iam in a div";
// let p2=document.createElement("p");
// p2.innerText="ME TOO!";
// div.append(h1);
// div.append(p2);

let body=document.querySelector("body");
let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="Click me"
body.append(input);
body.append(button);
input.placeholder="Username";
//or
//input.setAttribute("placeholder","Username");
button.setAttribute("id","btn");

let buttonId=document.querySelector("#btn");
buttonId.style.backgroundColor="blue";
buttonId.style.color="white";

let h1=document.createElement("h1");
h1.innerText="DOM Practice"
body.append(h1);
h1.classList.add("heading1");

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
body.append(p);
