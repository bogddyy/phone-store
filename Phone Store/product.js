class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
            <li class="product">
                <p>Nume: ${this.name}</p>
                <p>Pret: ${this.price}</p>
            </li>
        `;
    }
}