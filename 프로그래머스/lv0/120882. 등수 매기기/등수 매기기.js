function solution(score) {
    let newArr = score.map(el => (el[0] + el[1]) / 2)
    let newSort = [...newArr].sort((a, b) => b - a) 
    return newArr.map(el => newSort.indexOf(el) + 1)
    {}    
}