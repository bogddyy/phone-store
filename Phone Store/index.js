const root = document.querySelector("#root");
const products = [
  {
    name: "Iphone XS",
    price: 4500,
  },
  {
    name: "Huawei P30",
    price: 4000,
  },
  {
    name: "Samsung S10",
    price: 4250,
  },
];

function getProducts() {
  // Extragem produsele din localStorage
  const localStorageProducts = localStorage.getItem("products");
  const parsedLocalStorageProducts = JSON.parse(localStorageProducts);
  return parsedLocalStorageProducts;
}

function setProducts(products) {
  // Introducem produsele in localStorage
  const stringifiedProducts = JSON.stringify(products);
  localStorage.setItem("products", stringifiedProducts);
}

if (localStorage.getItem("products") === null) {
  // ADAUGAM PRODUSELE IN LocalStorage
  setProducts(products);
}

function startRendering() {
  const localStorageProducts = getProducts();
  renderProductList(localStorageProducts);
}
window.addEventListener("load", startRendering);
