const table = document.querySelector('.gameTable').children[0];
const rows = table.children;
let lastMark = 'X';
const resetBtn = document.querySelector('.reset');
let id = 1;

const checkWin = () => {
    let cols = Array.prototype.slice.call(document.getElementsByTagName('td'));
    let col1 = cols.slice(0, 3);    
    let col2 = cols.slice(3, 6);
    let col3 = cols.slice(6, 9);
    let rows = [col1, col2, col3];

    let mark = rows[0][0].innerText;
    if(rows[0][1].innerText === mark && rows[0][2].innerText === mark
        || rows[1][0].innerText === mark && rows[2][0].innerText === mark
        || rows[1][1].innerText === mark && rows[2][2].innerText === mark) {
        alert("'" + mark + "'" + ' Won');
    } 

    mark = rows[0][1].innerText;
    if(rows[1][1].innerText === mark && rows[2][1].innerText === mark) {
        alert("'" + mark + "'" + ' Won');
    }

    mark = rows[0][2].innerText;
    if(rows[1][2].innerText === mark && rows[2][2].innerText === mark
        || rows[1][1].innerText === mark && rows[2][0].innerText === mark) {
        alert("'" + mark + "'" + ' Won');
    }

    mark = rows[1][0].innerText;
    if(rows[1][1].innerText === mark && rows[1][2].innerText === mark) {
        alert("'" + mark + "'" + ' Won');
    }

    mark = rows[2][0].innerText;
    if(rows[2][1].innerText === mark && rows[2][2].innerText === mark) {
        alert("'" + mark + "'" + ' Won');
    }
};

const init = () => {
    for(let i = 0; i < rows.length; i++) {
        let cols = rows[i].children;
        for(let j = 0; j < cols.length; j++) {
            cols[j].innerText = (id++).toString();
            cols[j].style.color = 'rgb(232, 231, 231)';
            cols[j].addEventListener('click', () => {
                if(cols[j].innerText === 'X' || cols[j].innerText === 'O') return;
                if(this.lastMark === 'X') {
                    cols[j].innerText = 'O';
                    cols[j].style.color = 'black';
                    this.lastMark = 'O';
                } else {
                    cols[j].innerText = 'X';
                    cols[j].style.color = 'red';
                    this.lastMark = 'X';
                }

                setTimeout(checkWin, 100);
            });
        }
    }
};

init();

resetBtn.addEventListener('click', () => {
    this.id = 0;
    init();
});