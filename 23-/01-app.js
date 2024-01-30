const student={
    name:"Sanjay",
    age:19,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} has got ${avg} average marks`);
    }
}

student.getAvg();


console.log(this);
