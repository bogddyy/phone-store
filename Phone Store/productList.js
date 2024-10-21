// Am mutat lista in afara lui renderProductList, deoarece functia va fi apelata din mai multe locuri.
root.innerHTML += `
    <h2>Telefoane:</h2>
    <ul id="product-list"></ul>
`;

function renderProductList(products) {
    // Golim lista in care se vor afisa produsele, inainte sa le afisam din nou.
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';
    products.forEach(function (product) {
        const phone = new Product(product.name, product.price);
        phone.renderProduct();
    });
}