const isPrime = (number) => {
    if (number % 2 === 0) return false; // if it's even, just return false
    else {
        for (let i = (number / 2).toFixed(); i > 1; i--) {
            if(i % 2 === 0) continue;
            else if(number % i === 0) return false;
        }
    }
    return true;
}

console.log(isPrime(10));
console.log(isPrime(5));
console.log(isPrime(3));
console.log(isPrime(17));
console.log(isPrime(8));

