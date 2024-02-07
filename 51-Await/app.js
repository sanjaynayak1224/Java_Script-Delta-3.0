function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}


h1=document.querySelector("h1");


function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color=color;
            console.log(`Color changed to ${color}`);
            resolve("color Changed!");
        },delay);
    });
}


async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("orange",1000);
        await changeColor("crimson",1000);
    }catch(err){
        console.log("Error caught");
        console.log(err);
    }
   
//(without try)in the function of changecolor suppose the num greater than 3 is generated then the promise will be rejected and further code wont be executed,so to overcome that we use try and catch
    let a=5;        
    console.log(a);
    console.log("new number=",a+3);

}

demo();
