function solution(n) {

    let result = 0
    
    for (i = 0; i <= 10; i++) {
        // n이 getFac(i)와 같거나 클 때
        if (n >= getFac(i)) {
            // result에 i값 담고
            result = i
            // for문 진행하기
            continue;
        }
        else {
            // 조건에 부합하지 않으면 멈추기
            break;
        }
    }
    return result;
}

function getFac(num) {
    if (num > 1) return num * getFac(num - 1)
    return num
}
    
    
