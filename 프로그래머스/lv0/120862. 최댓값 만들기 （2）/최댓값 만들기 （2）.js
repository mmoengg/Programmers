function solution(numbers) {

    const result = numbers.slice().sort((a, b) => a - b)
    
    const count1 = result[result.length - 1] * result[result.length - 2]
    
    const count2 = result[0] * result[1]

    return Math.max(count1, count2)
    
}