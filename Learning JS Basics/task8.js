const specialMultiply = (num1, num2 = null) => {
    if(num2 === null) {
        return (num2) => {
            return num1 * num2;
        }
    } else return num1 * num2;
}

console.log(specialMultiply(3)(4));
console.log(specialMultiply(3, 4));