function solution(my_string) {
   return [...my_string].filter((a,i) => my_string.indexOf(a) === i).join("")
}