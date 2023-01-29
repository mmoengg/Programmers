function solution(chicken) {
    let result = 0
    let chi =  chicken % 10 // 남는 쿠폰
    let coupon = Math.floor(chicken / 10) // 쿠폰 발급 수
    result += coupon
    coupon += chi

    while(1) {
        chi = coupon % 10
        coupon = Math.floor(coupon / 10)
        result += coupon
        if (coupon === 0) break;
        coupon += chi
    }

    return result
}