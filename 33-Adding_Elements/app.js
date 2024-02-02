//adding elements into html documents
let newP=document.createElement("p");
console.dir(newP);
newP.innerText="Hello iam a new p" //but this only creates a new p tag in the javascript file,so inorder for this element to be viewed in the webpage,we have to insert this into the html document
let body=document.querySelector("body");
body.appendChild(newP);   //appendChild used to insert some element into a parent i,e in here inside body

let box=document.querySelector(".box");
box.appendChild(newP);

let btn=document.createElement("button");
console.dir(btn);
btn.innerText="iam a button";
box.appendChild(btn);


newP.append(" this is new text"); //used more often used to add something into an existing element(another element or text) ,which in this case adding more lines into the exisiting p tag

box.prepend(btn);  //append adds in the last,but this adds in the first


let btn2=document.createElement("button");
btn2.innerHTML="iam a button2";
let p=document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn2);


let btn3=document.createElement("button");
btn3.innerHTML="iam a button3";

p.insertAdjacentElement('afterbegin',btn3);

let btn4=document.createElement("button");
btn4.innerHTML="iam a button4";


p.insertAdjacentElement('beforeend',btn4);

let btn5=document.createElement("button");
btn5.innerHTML="iam a button5";

p.insertAdjacentElement('afterend',btn5);


//removing elements
//removeChild(element)  ex:- box.removeChild(btn)
//remove(element)       ex:- btn.remove()







