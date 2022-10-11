const btn = document.getElementById("add");

btn.addEventListener('click', () => {
    const table = document.getElementById('recordTable');
    const name  = document.getElementById('name');
    const stdID = document.getElementById('stdid');
    const batch = document.getElementById('batch');
    const gpa   = document.getElementById('gpa');

    let numOfRow = table.children.length;
    const tr  = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const del = document.createElement('button');
    del.innerText = 'Delete';

    del.addEventListener('click', () => {
        table.removeChild(tr);
    });

    td1.innerText = numOfRow.toString();
    td2.innerText = name.value;
    td3.innerText = stdID.value;
    td4.innerText = batch.value;
    td5.innerText = gpa.value;
    td6.append(del);
    td6.style.textAlign = 'center';

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(td6);
    table.append(tr);
});

