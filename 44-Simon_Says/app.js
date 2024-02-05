let gameSeq=[];
let userSeq=[];
let heighestLevel=[];
let btns=["red","yellow","green","purple"];

let started=false;
let level =0;
let h2=document.querySelector("h2");


//to start game only once
document.addEventListener("keydown",function(){
    if(started==false){
     console.log("game started");
     started=true;
     levelUp();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function screenFlash(){
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    //random button choose
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log("gameSeq:",gameSeq)
    btnFlash(randomBtn);
    

}

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     },250);
// }

function checkAns(index){
    // console.log("current level:",level);
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            heighestLevel.push(level);
            setTimeout(levelUp,1000);
        }
    }
    else{
        screenFlash();
        let highScore=heighestLevel.reduce((max,el)=>{
            if(max<el){
                return el;
            }
            else{
                return max;
            }
        })
        h2.innerHTML=`Game Over! Your score was <b>${level-1}</b><br>The heighest score is ${highScore}<br>Press any key to start`;
        reset();
        
    }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
   console.log("userSeq:",userSeq);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}



function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}