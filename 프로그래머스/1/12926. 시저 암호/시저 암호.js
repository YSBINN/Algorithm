function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    
    return s.split('').map(char => {
        if(char === ' ') return char; 
        
        const source = upper.includes(char) ? upper : lower;
        let newIndex = (source.indexOf(char) + n) % source.length;
        
        return source[newIndex];
    }).join('');
}