console.log(Math.min(1,2,3,4,5,6));//prints minimum


let arr=[1,2,3,4,-8.-9,6,5,4,3,1,7,8,90,-87];
//but here we have to to pass element index of the element in the math.min function i.e console.log(Math.min(arr[0],arr[1],arr[2].......)) which is really hard to pass every index,therefore there is a shortcut for this:-

console.log(Math.min(...arr));
console.log(...arr);

console.log(..."apnacollege");

console.log("=".repeat(72));

let arr2=[1,2,3,4,5];
console.log(arr2);
let newArr=[...arr2]; //by doing this if we change anything in this array,it wont affect the previous array
console.log(newArr);

let char=[..."hello","all"];
console.log(char);



const data={
    email:"iron@gamil.com",
    password:"abcd"
};


let dataCopy={...data,id:123};
console.log(dataCopy);


let array=[1,2,3,4,5];
let obj1={...array};//defaults stores the keys as the individual index of the elements

console.log(obj1);


let obj2={..."hello"}; //defaults stores the keys as the individual index of the string elements;

console.log(obj2);