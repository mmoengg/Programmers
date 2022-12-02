function solution(my_string) {
    let arr = my_string.match(/\d/g)
    arr.sort()    
    const toNumbers = arr.map(Number)    
    return toNumbers
}
