function solution(my_str, n) {
    
    let str = my_str.split("");
    let ans = [];
    
    while(str.length > 0){
        ans.push(str.splice(0, n).join(""));
    }
    
    return ans;
}