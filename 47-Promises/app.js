// function saveToDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// saveToDb("apnacollege",()=>{
//     console.log("Success:Your data was saved");
//     saveToDb("hello world",()=>{
//         console.log("Success2:Your data was saved");
//         saveToDb("Hello world 2",()=>{
//             console.log("Success3:Your data was saved");
//         },()=>{
//             console.log("Failure3:Your data was not saved")
//         })
//     },()=>{
//         console.log("Failure2:Your data was not saved");            
//     })
// },()=>{
//     console.log("Failure:Your data was not saved");
// });

//the above case is basically a callback hell,where we are passing callbacks inside callbacks(basically nesting) inside a bigger calling function which is very confusing for a coder to read and understand and follow through,so to encounter this we use promises:-


function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success:data was saved");
        }
        else{
            reject("failure:weak connection");
        }
    });
}

// console.log(saveToDb("apnacollege"));

let request=saveToDb("apnacollge");
// console.log(request);

request.then(()=>{
    console.log("The process was a success");
    console.log(request);
})
.catch(()=>{
    console.log("The process was not a sucess");
    console.log(request);
})

//or shortcut
saveToDb("apnacollege").then(()=>{
    console.log("The process was a success");
})
.catch(()=>{
    console.log("The process was not a sucess");

})