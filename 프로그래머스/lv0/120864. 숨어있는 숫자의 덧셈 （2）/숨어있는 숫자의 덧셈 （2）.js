function solution(my_string) {
    let result = 0    
    for (i = 0; i < my_string.length; i++) {
        let thisNum = ''
        while (!Number.isNaN(Number(my_string[i]))) {
            thisNum += my_string[i]
            i++
        }
        result += +thisNum
    }
    return result
}