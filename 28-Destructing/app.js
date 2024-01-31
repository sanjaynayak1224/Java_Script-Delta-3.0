//destructuring arrays
let names=["Tony","Bruce","steve","peter"]
let [winner,runnerup,...others]=names;  //this doesnt change the names array
console.log(winner);
console.log(runnerup);
console.log(others);
console.log(winner,runnerup,others);  //"Tony" "bruce"


//destructuring objects
const student={
    names:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username :"karan@123",
    password:"abcd"
};


console.log("=".repeat(74));


let {username:user,password:secret,city:place="mumbai",...rest}=student;
console.log(user);
console.log(secret);
console.log(place);
console.log(rest);
console.log(user,secret,place,rest);
