function listofCountries(arr){
    let larger="";
    for(i=0;i<arr.length;i++){
        if(larger.length<arr[i].length){
            larger=arr[i];
        }
    }

    console.log(larger);
}

listofCountries(["Australia","Germany","United States of America"]);




//or
let country=["Australia","Germany","United States of America"];
function longestName(country){
    let ansIdx=0;
    for(let i=0;i<country.length;i++){
        let ansLen=country[ansIdx].length;
        let currLen=country[i].length;
        if(currLen>ansLen){
            ansIdx=i;
}
}
return country[ansIdx];
}
console.log(longestName(country));