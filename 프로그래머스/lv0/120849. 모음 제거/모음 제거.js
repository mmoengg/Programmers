function solution(my_string) {

    let result = '';
    let arr = my_string.split('')

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || 
            arr[i] === 'e' ||
            arr[i] === 'i' ||
            arr[i] === 'o' || 
            arr[i] === 'u') {
            result = result
        } else {
            result += my_string[i]
        }
    }
    
    return result;
}
