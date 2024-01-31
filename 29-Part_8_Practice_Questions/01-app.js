//Practice Question 01
console.log("Practice Question 01");
let nums=[1,2,3,4,5];

const square=nums.map((num)=>num*num);
console.log(square);
let sum=square.reduce((acc,cur)=>acc+cur);
let avg=sum/nums.length;
console.log(avg);

console.log("=".repeat(69));

//Practice Question 02
console.log("Practice Question 02");
let arr=[1,2,3,4,5];

let newarr=arr.map((el)=>(el+5));
console.log(newarr);

console.log("=".repeat(69));

//Practice Question 03
console.log("Practice Question 03");
let lower=["sanjay","shivesh","sujal","abhay"];
let upper=lower.map((el)=>(el.toUpperCase()));
console.log(upper);

console.log("=".repeat(69));

//Practice Question 04
console.log("Practice Question 04");
function doubleAndReturnARgs(...args){
    return [args,args.map((el)=>(el*2))];
}


console.log(doubleAndReturnARgs(1,2,3,4,5));
console.log("OR");
//or
const doubleAndReturnARgs2=(...args2)=>(
    [args2,args2.map((el)=>(el*2))]
)



console.log(doubleAndReturnARgs2(1,2,3,4,5));

console.log("OR");
//or
const doubleAndReturnARgs3=(arr,...args2)=>(
    [arr,args2.map((el)=>(el*2))]
)



console.log(doubleAndReturnARgs3([1,2,3,4,5],1,2,3,4,5));


console.log("=".repeat(69));


//Practice Question 05
console.log("Practice Question 05");
const mergeObjects=(obj1,obj2)=>(
         {...obj1,...obj2}
)

console.log(mergeObjects({a:1,b:2,c:3},{d:4,e:5,f:6}));