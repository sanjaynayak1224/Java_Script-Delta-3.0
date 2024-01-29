function outer(){
    let x=5;
    let y=6;
    function inner(){
        console.log(x);
        console.log(y);
    }
    inner();
}

outer();