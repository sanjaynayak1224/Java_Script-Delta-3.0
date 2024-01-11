let color="red";
if(color==="red"){
    console.log("Stop!,The light color is red");
}
else if(color==="yellow"){
    console.log("Slow down!,The light color is yellow");
}
else if(color==="green"){
    console.log("Go!,The light color is green");
}


//practice Question
console.log("PRACTICE QUESTION BELOW");
let size="XL"
if(size==="XL"){
    console.log("The price of the popcorn is 250");
}
else if(size==="L"){
    console.log("The price of the popcorn is 200");
}
else if(size==="M"){
    console.log("The price of the popcorn is 100");
}
else if(size==="S"){
    console.log("The price of the popcorn is 50");
}
else{
    console.log("Invalid Size Selected");
}

//nested if also exists in javascript
let marks=82;
if(marks>=33){
    console.log("Pass");
    if(marks>=80){
        console.log("Grade : A+");
    }
    else if(marks>=60){
        console.log("Grade : A");
    }
    else{
        console.log("Grade : B");
    }
}
else{
    console.log("Better luck next luck");
}