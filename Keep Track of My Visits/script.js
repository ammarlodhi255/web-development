let timesVisited;
const counter = document.querySelector('.counter').children[0];

window.onload = () => {
    if (localStorage.getItem('timesVisited') === null) timesVisited = 1;
    else {
        timesVisited = parseInt(localStorage.getItem('timesVisited'));
        timesVisited += 1;
    }
    counter.innerText = timesVisited;
    localStorage.setItem('timesVisited', timesVisited);
};