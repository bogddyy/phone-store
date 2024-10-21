root.innerHTML += `
 <button id="sort-by-price">Sorteaza dupa pret</button>
 <button id="sort-by-name">Sorteaza dupa nume</button>
`;

function sortProducts(sortType) {
  switch (sortType) {
    case "SORT_BY_PRICE":
      function compare(phone1, phone2) {
        return phone1.price - phone2.price;
      }
      console.log("sortare dupa pret");
      // Pas1: Luam produsele din localStorage
      const localStorageProducts = getProducts();
      // Pas2: modificam produsele
      localStorageProducts.sort(compare);
      // Pas3: Afisam produsele pe ecran:
      renderProductList(localStorageProducts);
      // Pas4: Punem produsele in localStorage
      setProducts(localStorageProducts);
      break;

    case "SORT_BY_NAME":
      function compareByName(phone1, phone2) {
        return phone1.name.localeCompare(phone2.name);
      }
      console.log("sortare dupa nume");
      // Pas1: Luam produsele din localStorage
      const localStorageProductsName = getProducts();
      // Pas2: modificam produsele
      localStorageProductsName.sort(compareByName);
      // Pas3: Afisam produsele pe ecran:
      renderProductList(localStorageProductsName);
      // Pas4: Punem produsele in localStorage
      setProducts(localStorageProductsName);
      break;

    default:
      console.log("Tip de sortare necunoscut");
  }
}

function addSortingFunctionality() {
  const sortByPriceButton = document.querySelector("#sort-by-price");
  sortByPriceButton.addEventListener("click", function () {
    sortProducts("SORT_BY_PRICE");
  });

  const sortByNameButton = document.querySelector("#sort-by-name");
  sortByNameButton.addEventListener("click", function () {
    sortProducts("SORT_BY_NAME");
  });
}

window.addEventListener("load", addSortingFunctionality);
