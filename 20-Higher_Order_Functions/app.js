/*
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}

let greet=function(){
    console.log("hello");
}

multipleGreet(greet,2);
*/

//or
/*
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        console.log(func());
    }
}

let greet=function(){
    return "hello"
}

multipleGreet(greet,2);
*/

//or
/*
function multipleGreet2(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}


multipleGreet2(function(){console.log("namaste")},2);
*/

//or
/*
function multipleGreet(n){
   let func=function(){
    for(let i=1;i<=n;i++){
    console.log("hello");
   }
}
   return func;
}

let output=multipleGreet(2);
output();
*/

function oddOrEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
        
    }

    else if(request=="even"){
        return function(n){
            console.log((n%2==0));
        }
    }
    else{
        console.log("wrong request");
    }
}

let request="odd";

let func=oddOrEvenFactory(request);

func(5);



