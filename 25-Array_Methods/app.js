// let arr=[1,2,3,4,5];
// let print=function(el) {
//     console.log(el);
// };
// arr.forEach(print);


// console.log("=".repeat(72));


// arr.forEach(function(el){
//     console.log(el);
// })

// console.log("=".repeat(72));


// arr.forEach((el)=>{
//     console.log(el);
// })


//console.log("=".repeat(72));



// let arr2=[
//     {
//         name:"aman",
//         marks:95
//     },
//     {
//         name:"shradha",
//         marks:100
//     },
//     {
//         name:"akash",
//         marks:90
//     }
// ];

// arr2.forEach(function(el){
//     console.log(el);
// })

// arr2.forEach(function(el){
//     console.log(el.name);
// })


//console.log("=".repeat(72));




// let num=[1,2,3,4];

// let double=num.map((el)=>{  
//     return el*2;
// })

// console.log(double);


//console.log("=".repeat(72));


// let nums=[2,4,1,5,6,2,7,8,9];
// let even=nums.filter((el)=>(
//     el%2==0
// ))

// console.log(even);


//console.log("=".repeat(72));


// let Every=[2,4,6,1].every((el)=>(el%2==0));  //AND

//console.log(Every); //false

// let Every2=[2,4,6].every((el)=>(el%2==0));

// console.log(Every2);  //true


//console.log("=".repeat(72));


// let Some=[2,4,6,1,3].some((el)=>(el%2==0));  //OR

// console.log(Some);  //true

// let Some2=[2,4,6].some((el)=>(el%2==0));  

// console.log(Some2);  //true

// let Some3=[1,3,5].some((el)=>(el%2==0));  

// console.log(Some3);  //false


//console.log("=".repeat(72));



// let Reduce=[1,2,3,4].reduce((res,el)=>(res+el));

// console.log(Reduce);

let array=[3,4,5,3,4,7,8,1,2];

let result=array.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});


console.log(result);





