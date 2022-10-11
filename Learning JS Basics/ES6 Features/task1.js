const raceResults = ([first, second, third, ...rest]) => 
    ({first, second, third, rest});

let obj = raceResults([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(obj);