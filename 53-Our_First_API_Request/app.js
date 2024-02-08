let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     // console.log(res.json());
//     res.json().then((data)=>{
//         console.log(data);
//     });
// })
// .catch((err)=>{
//     console.log("ERROR-",err);
// });

//or

fetch(url)
.then((res)=>{
    // console.log(res);
    // console.log(res.json());
    return res.json()
}).then((data)=>{
    console.log(data);
    console.log("Data1=",data.fact);
    return fetch(url);
})
.then((res)=>{
    // console.log(res);
     // console.log(res.json());
     return res.json();
})
.then((data)=>{
    console.log(data);
    console.log("Data2=",data.fact);
})
.catch((err)=>{
    console.log("ERROR-",err);
});