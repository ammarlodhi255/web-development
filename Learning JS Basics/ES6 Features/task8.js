var logOne = new Promise ((resolve, reject) => setTimeout(function() { 
    resolve("one!"); 
}, Math.random() * 1000)); 

var logTwo = new Promise((resolve, reject) => setTimeout(function() { 
    resolve("two!"); 
}, Math.random() * 1000)); 

const inOrder = (callback1, callback2) => {
    Promise.all([callback1, callback2])
    .then((results) => console.log(results))
    .catch(err => console.log(err));
}

inOrder(logOne, logTwo);