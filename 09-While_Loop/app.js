// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

const favMovie="avatar"
let guess=prompt("Guess the Movie");
while(guess!=favMovie && (guess!="quit")){
        guess=prompt("wrong Guess,guess the right movie");
}

if(guess==favMovie){
    console.log("congrats!");
}

else{
    console.log('You Quit');
}
