let jsonRes=
'{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

//to convert json data to js object
let validRes=JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);


let studentrRes={
    Name:"Sanjay",
    Marks:95,
};
console.log(studentrRes);

//to convert js object to json data 
let validStudentRes=JSON.stringify(studentrRes);
console.log(validStudentRes);