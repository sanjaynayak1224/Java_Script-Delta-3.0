// console.dir(document.all[8]);
// console.dir(document.all[8].innerText);
// document.all[8].innerText="Peter Parker";
// document.all[8].innerText="Iron Man";

// //selecting using id
// let obj1=document.getElementById("mainImg");
// console.dir(obj1);
// obj1.src="assets/creation_2.jpeg";


// //selecing using class
// let smallImages=document.getElementsByClassName("oldImg");
// console.dir(smallImages);
// for(let i=0;i<smallImages.length;i++){
//     console.dir(smallImages[i].src);

// }


// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="assets/spiderman_img.png"

// }


// //selecing using name
//  let paragraph=document.getElementsByTagName("p");
//  console.dir(paragraph);

//  paragraph[1].innerText="abc";



//Query Selectors
//normal query selector
//selects the first occurance
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));


console.dir(document.querySelector("div a"));



//query selector all
//selects all of the occurances
console.dir(document.querySelectorAll("div a"));  //returns the collection of objects

console.dir(document.querySelectorAll("p"));



//manipulating attributes like id,class and src etc
let img=document.querySelector('img');
console.dir(img.getAttribute('id'));
img.setAttribute('id','spidermanImg');  //id changed from mainImg to spidermanImg

