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


// saveToDb("apnacollege")
//     .then(()=>{
//         console.log("Data1 Saved .Promise was Resolved");
//         saveToDb("hello World")
//         .then(()=>{
//             console.log("Data2 Saved.Promise Was Resolved");
//             saveToDb("hello World2")
//             .then(()=>{
//                 console.log("Data3 Saved.Promise Was Resolved");
//             })
//         })
//     })
//     .catch(()=>{
//         console.log("Promise was rejected");

//     });

// console.log("="*73);
//or best way and way way better than call back hells
saveToDb("apnacollege")
    .then((result)=>{
        console.log("Data1 Saved .Promise was Resolved");
        console.log("Result of promise1",result);
         return saveToDb("hello World")
     })
     .then((result)=>{
        console.log("Data2 Saved.Promise was resolved")
        console.log("Result of promise2",result);
        return saveToDb("hello World2")
     })
     .then((result)=>{
        console.log("Data3 Saved.Promise was resolved")
        console.log("Result of promise3",result);
     })
    .catch((error)=>{
        console.log("Promise was rejected");
        console.log("error of promise",error);

    });