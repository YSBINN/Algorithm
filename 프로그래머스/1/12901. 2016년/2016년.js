function solution(m, d) {
const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
       return day[new Date(2016,m-1,d).getDay()]
}