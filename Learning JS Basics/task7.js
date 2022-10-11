const findIndex = (list, f) => {
    for (let i = 0; i < list.length; i++)
        if (f(list[i])) return i;
    return -1;
}

const greater = val => val > 10;
const less = val => val < 10;
const equal = val => val === 10;

let arr = [9, 3, 4, 5, 10, 11, 12];

console.log(findIndex(arr, greater));
console.log(findIndex(arr, less));
console.log(findIndex(arr, equal));