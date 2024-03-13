function solution(today, terms, privacies) {
  const answer = [];

  const expire = new Date(today);

  terms = terms.reduce((acc, term) => {
    const [type, value] = term.split(" ");
    return { ...acc, [type]: Number(value) };
  }, {});

  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");

    const chDate = new Date(date);

    chDate.setMonth(chDate.getMonth() + terms[type]);

    if (chDate <= expire) answer.push(idx + 1);
  });

  return answer;
}