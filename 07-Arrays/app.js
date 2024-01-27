let students=["sanjay","shivesh","sujal"];
console.log(students.length);
console.log(students[0]);
let emptyArray=[];
console.log(emptyArray);
students[0]="Nayak";   //arrays are mutable
console.log(students);
students.push("abhay");  //adds the specified element add the end of the array
console.log(students);
students.pop();  //removes last element of the array
console.log(students);
students.unshift("abhay"); //adds the specified element add the start of the array
console.log(students);
students.shift();
console.log(students); //removes first element of the array and returns it

let Names=["Red","Yellow","Green"];
console.log(Names.indexOf("Yellow"));
console.log(Names.includes("Red"));
console.log(Names.includes("Yellow"));
console.log(Names.includes("Green"));

let Names2=["Violet","Pink"];
console.log(Names.concat(Names2));  //merges two arrays
console.log(Names.concat(Names2).reverse());  //reverses the arrays

//slice method also is used here just like it is used for strings but this doesnt change the original array
let dir=["East","West","North","South"];
console.log(dir.slice(1));
console.log(dir);
let colors=["red","yelow","blue","orange","pink","white"];
console.log(colors.splice(4)); //deletes elements from the 4th index till end (splice changes original array)
console.log(colors);  //prints the elements that are before the 4th index
let colors2=["red","yelow","blue","orange"];
console.log(colors2.splice(0,1));  //deletes the element specified within the range of indexes where 2nd parameter is exclusive
console.log(colors2); 
let dir2=["East","West","North","South"];
console.log(dir2.splice(1));
console.log(dir2);

let dir3=["red","yellow","gray"];
console.log(dir3.splice(0,1,"grey","blue"));
console.log(dir3);


let a=["abhay","atul","zoya","yasnaya","ashlin","boya","ashish"];
console.log(a);
let b= a.sort();
console.log(b);

let c=[25,16,4,49,36,9]; //doest work,sortm method works only on strings and not numbers
console.log(c);
let d=c.sort();
console.log(d);

let ticTacToe=[['x',null , 'o'],[null,'x' ,null],['o',null, ' x']];
console.log(ticTacToe);
let arr=[7,9,0,2];
arr.splice(3,4);
console.log(arr);
let arr2=[7,9,0,2];
arr2.splice(0,1);
console.log(arr2)