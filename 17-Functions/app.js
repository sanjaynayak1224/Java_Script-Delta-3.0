/*
function hello(){
    console.log("hello world");
}

function hello2(){
    return "hello";
}

hello();
console.log(hello2());
*/

/*
function roll(){
    console.log(Math.ceil(Math.random()*6));
}

roll();

function tables(x){
    for(let i=1;i<=10;i++){
        console.log(x*i);
    }
}

let number=prompt("Enter the number who's tables you want to print:");
tables(number);
*/



/*
function sum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}


console.log(sum(1000));
*/

function join(x){
    
    let joined="";
    for(names of x){
        joined=joined.concat(names);
        //or joined=joined+names;
    }
    /*or
    for(let i=0;i<arr.length;i++){
        joined=joined.concat(x[i]);
       //or joined=joined+x[i];
    }
    */
    return joined
}
let arr=["sanjay","shivesh","sujal","sujal","abhay"];
console.log(join(arr));

