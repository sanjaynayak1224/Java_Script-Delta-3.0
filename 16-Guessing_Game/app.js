const max=prompt("Enter the maximum number:");

const random=Math.ceil(Math.random() *max);

let guess=prompt("Guess The Number:");

while(true){
    if(guess=="quit"){
        console.log("You have quit");
        break;
    }
    if(guess==random){
        console.log("You are right! congrats!The random number was",random);
        break;
    }
    else if(guess<random){
        guess=prompt("Hint:The random number is larger than the number you have entered ");
    }
    else{
        guess=prompt("Hint:The Random number is lesser than the number you have entered");
    }
}


// //practice question 1
// console.log(Math.ceil(Math.random()*6));

// //practice question 2
// const car={
//     name:"Audi",
//     model:"A8",
//     color:"black"
// }
// console.log(car);
// console.log(car.name);
// console.log(car.model);


// //practice question 3
// const person={
//     name:"Sanjay",
//     age:"19",
//     city:"Los Angelos"
// }

// console.log(person);
// console.log(person.city);
// person.city="New York";
// console.log(person.city);
// console.log(person);
// person.country="United States Of America";
// console.log(person.country);
// console.log(person);


















