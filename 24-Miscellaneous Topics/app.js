// //shorthand to write functions using arrow functions
// const sum=(a,b)=>{  //arrow functions
//     console.log(a+b);
// };

// sum(1,2);


// //still more shorthand(implicit return in arrow functions)
// const mul=(a,b)=>(
//     a*b
// );

// console.log(mul(5,3));
// console.log(mul(50,30));



//set timeout
/*
console.log("hi there!");

setTimeout( ()=>{
    console.log("Apna college");
},4000); 

console.log("welcome to");
*/

//set interval
/*let id=setInterval(()=>{
    console.log("apna college");
},2000); 
console.log(id);
*/

// const student={
//     name:"aman",
//     marks:95,
//     prop:this,  //global scope -->window
//     getName: function(){
//         console.log(this);  //the object itself is "this"
//         return this.name;
//     },
//     getMarks : ()=>{
//         console.log(this);  //parent's scope i.e object's scope--.global scope-->window
//         return this.marks;
//     },
//     getInfo1:function(){
//         setTimeout(()=>{
//             console.log(this);  //function is the parent and its this is the object itself
//         },2000);
//     },
//     getInfo2:function(){
//         setTimeout(function(){
//             console.log(this);  //normal function sees who has called it which in this cass is the setTimeout function i.e an inbuilt function of window object,hence for this the "this" is the window object
//         },2000);
//     }
// };

// let id=setInterval(()=>{
//     console.log("Hello world");
// },2000);


// setTimeout(()=>{clearInterval(id);
//                 console.log("Clear Interval ran");
// },10000);

//this program prints hello world 5 times each with an interval of 2 seconds

const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);