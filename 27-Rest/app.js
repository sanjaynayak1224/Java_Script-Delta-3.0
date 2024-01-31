function sum(...args){
    return args.reduce((sum,el)=>(sum+el));
}

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(...[1,2,3,4,5]));

