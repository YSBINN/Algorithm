function solution(a, b, n) {

    let result = 0;
    while(n>=a){
        result += Math.floor(n/a)*b
        n = Math.floor(n/a)*b + n%a
    }
    return result
}

// const solution = (a, b, n) => {
//     let answer = 0;
//     let remain = n;

//     while (true) {
//         if (a > remain) {
//             break;
//         }
//         answer += parseInt(remain/a)*b;
//         remain = parseInt(remain/a)*b + remain%a
//     }

//     return answer;
// }