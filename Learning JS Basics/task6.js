const find = (list, f) => {
    for (let i = 0; i < list.length; i++)
        if (f(list[i])) return list[i];
    return null;
}

const greater = val => val > 10;
const less = val => val < 10;
const equal = val => val === 10;

let arr = [11, 5, 6, 8];
console.log(find(arr, greater));
console.log(find(arr, less));
console.log(find(arr, equal));