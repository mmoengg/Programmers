function solution(my_string) {

    let result = 0

    let arr = my_string.split('')

    for (i = 0; i < arr.length; i++) {
        if(Number(arr[i])) {
            result += Number(arr[i])
        }
    }

    return result;
}
