const numberFact = (number, f) => f(number);

const isEven = number => number % 2 === 0;
const isOdd = number => number % 2 !== 0;

const isPrime = (number) => {
    if (number % 2 === 0) return false; // if it's even, just return false
    else {
        for (let i = (number / 2).toFixed(); i > 1; i--) 
            if(number % i === 0) return false;
    }
    return true;
}

console.log(numberFact(59, isOdd));
console.log(numberFact(59, isEven));
console.log(numberFact(59, isPrime));

