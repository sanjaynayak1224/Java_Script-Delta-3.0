const student={
    name:"shradha",
    age:23,
    marks:94.4,
    city:"delhi"
};
console.log(student);


const post={
    username:"@Sanjay",
    content:"this is my first post",
    likes:1000,
    reposts:300,
    tags:["apnacollege","delta"],
    1:"hello"
}

console.log(post);

console.log(post["username"]);
//or
console.log(post.username);
console.log(post['1']);
//or
console.log(post[1]);

console.log(post.tags);
console.log(post.tags[0]);
console.log(post.tags[1]);

let prop="likes"
// console.log(post["likes"]);
//or
console.log(post[prop]);


const student2={
    name:"shradha",
    age:23,
    marks:94.4,
    city:"delhi"
};

console.log(student2);

console.log(student.city);

student2.city="mumbai";
console.log(student2.city);
console.log(student2);
student2.gender="female"
console.log(student2.gender);
console.log(student2);
delete student2.gender;
console.log(student2);


//objectsofobjects

const classInfo={
    aman:{
        grade:"A+",
        city:"Delhi",
    },
    shradha:{
        grade:"A",
        city:"Pune",
    },
    karan:{
        grade:"0",
        city:"Mumbai"
    }
};


console.log(classInfo);

console.log(classInfo.aman);
console.log(classInfo.aman.grade);

//adding ,updating and deleting is the same 

const classInfo2=[
    {
        name:"Aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"Shradha",
        grade:"A+",
        city:"Pune"
    },
    {
        name:"Karan",
        grade:"O",
        city:"Mumbai"
    }
];

console.log(classInfo2);
console.log(classInfo2[0]);
console.log(classInfo2[0].name);
console.log(classInfo2[0].grade);
//adding ,updating and deleting is the same 