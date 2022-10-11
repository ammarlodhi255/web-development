const printFirstAndLast = (list) => {
    list.forEach((item) => {
        console.log(item[0] + '' + item[item.length - 1]);
    });
} 

let platforms = ['youtube', 'codeacademy', 'coursera', 'udacity', 'datacamp'];
printFirstAndLast(platforms);