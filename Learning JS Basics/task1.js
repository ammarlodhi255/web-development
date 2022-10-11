const countdown = (number) => {
    let id = setInterval(() => showNum(number--, id), 1000);
}

// Helper function
const showNum = (number, id) => {
    if (number === 0) {
        console.log('DONE');
        clearInterval(id);
    }
    else
        console.log(`Number: ${number}`);
}

countdown(10);