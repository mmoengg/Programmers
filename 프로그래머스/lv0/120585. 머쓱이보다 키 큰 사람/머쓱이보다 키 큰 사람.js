function solution(array, height) {

    // 키가 담긴 정수 배열 array
    // 머쓱이 키 height
    // 머쓱이보다 큰 사람 리턴
    
    let result = 0;
    
    for (i = 0; i < array.length; i++) {
        if (array[i] > height) {
            result = result + 1
        }
    }
       return result; 
    
}