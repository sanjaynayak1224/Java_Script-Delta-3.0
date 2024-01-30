// function generateRandomNumber(num1,num2,max){
//     while(true){
//         let Random=Math.floor(Math.random()*max);
//         if(Random>=num1 && Random<num2){
//             console.log(Random);
//             break;
//         }
        
//     }
// }


// generateRandomNumber(200,500,1000);




//or
function generateRandom(start,end){
    let diff=end-start;
    console.log(Math.floor(Math.random()*diff)+ start);
}

generateRandom(500,1000);


























