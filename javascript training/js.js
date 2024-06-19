function reverse(a){
    return a.split('').reverse().join('')
}
function count(a){
    return a.length
}
function majus(a){
    return a.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}





function max(a) {
    return a.MAX_VALUE 
}

function min(a) {
    return a.MIN_VALUE
}
function sum(a){
    return a.reduce((x, y) => x + y, 0);
}
function fil(a,condition){
    return a.filter(condition);
}
function fact(n){
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
}
}
function prime(n){
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function fibonacci(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else {
        let sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
}