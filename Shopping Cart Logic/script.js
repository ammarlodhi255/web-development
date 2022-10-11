let totalPrice = 0;

const isPresent = (item) => {
    const products = document.querySelectorAll('.item');
    for(let product of products) {
        if(product.innerText === item) return product.nextElementSibling;
    }
};

const updateCart = (event) => {
    const mainTable = document.getElementById('mainTable');
    const totalRow = document.getElementById('total');
    const parentChildren = event.target.parentElement.parentElement.children;
    let product = parentChildren[0].innerText;
    let price = 0;

    price = parseInt(parentChildren[1].innerText.substring(4, parentChildren[1].innerText.length));
    
    let quantity = isPresent(product);
    if(quantity) {
        let oldQuantity = parseInt(quantity.innerText);
        let newQuantity = parseInt(quantity.innerText) + 1;
        quantity.innerText = newQuantity.toString();
        quantity.nextElementSibling.innerText = `Rs. ${newQuantity*price}`;
        totalPrice -= oldQuantity*price;
        totalPrice += newQuantity*price;
        totalRow.innerText = `Total: Rs. ${totalPrice}`;
        return;
    } else totalPrice += price;

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const removeBtn = document.createElement('button');

    td1.classList.add('item');
    td4.setAttribute('id', 'btntd');

    removeBtn.addEventListener('click', () => {
        let priceToMinus = parseInt(tr.children[2].innerText.substring(4, tr.children[2].innerText.length));
        totalPrice -= priceToMinus;
        totalRow.innerText = `Total: Rs. ${totalPrice}`;
        mainTable.removeChild(tr);
    });

    removeBtn.innerHTML = '<i class="fa fa-trash-o" style="font-size:36px"></i>';
    td1.innerText = product;
    td2.innerText = 1;
    td3.innerText = `Rs. ${price}`;
    td4.append(removeBtn);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    mainTable.append(tr);

    totalRow.innerText = `Total: Rs. ${totalPrice}`;
};
