const delay = 
    (ms) => new Promise((resolve, reject) => 
    setTimeout(() => resolve('Done'), ms));

delay(3000).then(() => console.log('Runs after 3 seconds'));