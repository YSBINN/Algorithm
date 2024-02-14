function solution(n, m, section) {
    return section.reduce((acc, cur) => {
        if (cur > acc.paint) {
            acc.count++;
            acc.paint = cur + m - 1;
        }
        return acc;
    }, { count: 0, paint: 0 }).count;
}