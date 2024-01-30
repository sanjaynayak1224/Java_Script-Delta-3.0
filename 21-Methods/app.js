const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mult: function(a,b){
        return a*b;
    }
    
}

console.log(calculator.add(1,2));
console.log(calculator.sub(20,2));
console.log(calculator.add(50,3));

//shortcut method to define methods

console.log("=".repeat(74))

const calc={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mult(a,b){
        return a*b;
    }
}


console.log(calc.add(1,2));
console.log(calc.sub(20,2));
console.log(calc.add(50,3));




