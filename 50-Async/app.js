async function greet(){
    // throw "Weak Connection!"
    return "Hello world"
}

greet()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("Result is:",result);
})
.catch((err)=>{
    console.log("Promise was rejected");
    console.log("Error is:",err);
});

//using async in arrow function
let demo=async ()=>{
    // throw "Weak Connection!"
    return 5;
}

demo()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("Result is:",result);
})
.catch((err)=>{
    console.log("Promise was rejected");
    console.log("Error is:",err);
});

