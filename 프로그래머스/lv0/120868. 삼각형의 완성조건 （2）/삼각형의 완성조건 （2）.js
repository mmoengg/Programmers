function solution(sides) {

    let fir = sides.slice(0, 1).join()
    let last = sides.slice(1).join()

    let small = 0

    if (+fir < +last) {
        small = fir
    } else {
        small = last
    }

    return +small + (small - 1)
}