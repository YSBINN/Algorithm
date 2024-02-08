function solution(cards1, cards2, goal) {
  let answer = 0;
  for(let i = 0 ; i < goal.length ; i += 1){
    const findWord = goal[i];
    
    if (cards1[0] === findWord) {
      cards1.shift();
    }else if(cards2[0] === findWord){
      cards2.shift();
    }else {
       answer++
    }
  }
  return answer ? "No" : "Yes"
}