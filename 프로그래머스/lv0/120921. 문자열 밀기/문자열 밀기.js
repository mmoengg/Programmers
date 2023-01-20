function solution(A, B) {
    let count = 0;

    const a = A.split("")
    const b = B.split("")

    while(a.join("") !== b.join("")){
        a.unshift(a[a.length-1])
        a.pop()
        count += 1
        if(count === a.length) break
    }
    return count === a.length ? -1 : count;
}