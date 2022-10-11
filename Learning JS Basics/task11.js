const valTimesIndex = (numbers) => {
    numbers = numbers.map((num, index) => {
        return num * index;
    });
    return numbers;
}

numbers = [3, 4, 5, 10, 11, 89];
numbers = valTimesIndex(numbers);

console.log(numbers);