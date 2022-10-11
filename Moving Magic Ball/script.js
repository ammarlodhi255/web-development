window.onload = () => {
    const getBallLoc = (cols) => {
        for(let i = 0; i < cols.length; i++) {
            if(cols[i].children.length != 0 && 
                cols[i].children[0].classList[0] === 'ball') {
                return i;
            }
        }
    };

    const isValidKey = keyPressed => (keyPressed === 'ArrowRight' || 
    keyPressed === 'ArrowUp' || keyPressed === 'ArrowDown'|| 
    keyPressed === 'ArrowLeft');

    const moveBall = (keyPressed, cols, loc) => {
        const ball = document.createElement('div');
        ball.classList.add('ball');     

        if(keyPressed === 'ArrowRight') {
            if (loc === 2 || loc === 5 || loc === 8)
                cols[loc - 2].append(ball);
            else cols[loc + 1].append(ball);
        } else if (keyPressed === 'ArrowLeft') {
            if (loc % 3 === 0) cols[loc + 2].append(ball);
            else cols[loc - 1].append(ball);
        } else if (keyPressed === 'ArrowUp') {
            if (loc === 0 || loc === 1 || loc === 2)
                cols[loc + 6].append(ball);
            else cols[loc - 3].append(ball);
        } else {
            if (loc === 6 || loc === 7 || loc === 8)
                cols[loc - 6].append(ball);
            else cols[loc + 3].append(ball);
        }
    };

    document.addEventListener('keyup', (event) => {
        let keyPressed = event.key;
        if(!isValidKey) return;

        let cols = document.querySelectorAll('td');
        let loc = getBallLoc(cols);
        cols[loc].removeChild(document.querySelector('div.ball'));  
        moveBall(keyPressed, cols, loc);
    });
}