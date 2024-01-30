function unique(str){
    let ans=""
    for(let i=0;i<str.length;i++){
        let currchar=str[i];
        if(ans.indexOf(currchar)==-1){
            ans=ans+currchar;
        }
    }
    return ans;
}

console.log(unique("abcdabcdefgggh"));