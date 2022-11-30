function solution(my_string, letter) {

    let result = '';
    
    for(i = 0; i < my_string.length; i++) {
        if (my_string[i] === letter) {
            continue;
        }
        else {
            result += my_string[i]
        }
    }
    
    return result;
}