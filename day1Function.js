
const value = factorial(4);
console.log(value);

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        console.log(fact);
        fact = fact * i;
    }
    return fact;
}