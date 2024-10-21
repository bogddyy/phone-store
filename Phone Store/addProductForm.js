// Afisam formularul pe ecran.
root.innerHTML += `
    <form id="add-product">
        <label for="name">Adauga numele telefonului:</label>
        <input type="text" name="name" id="name"/>
        <label for="price">Adauga pretul:</label>
        <input type="number" name="price" id="price"/>
        <input type="submit" value="Adaugă"/>
    </form>
`;

function addFormFunctionality() {
  const form = document.querySelector("#add-product");
  // Adaugam un eventListener pentru eventul de submit.
  form.addEventListener("submit", function (event) {
    // ESENTIAL! Cand BROWSERUL apeleaza functia la submit, ii paseaza ca parametru un obiect ce contine toate detaliile despre evenimentul petrecut.
    console.log(event);
    // By default, la submiterea formularului pagina este incarcata. Trebuie sa prevenim acest comportament.
    event.preventDefault();
    // event.target = elementul de HTML de la care s-a declansat evenimentul (aici - form-ul).
    // Form-ul contine in interiorul lui input-uri, iar acestea pot fi identificate prin atributul "name".
    const phoneName = event.target.name.value;
    const phonePrice = Number(event.target.price.value);
    // Cream un nou telefon si il adaugam in vectorul de produse.
    const newPhone = {
      name: phoneName,
      price: phonePrice,
    };

    // PAS1: Extragem produsele din localStorage
    const localStorageProducts = getProducts();
    // PAS2: Modificam produsele
    localStorageProducts.push(newPhone);
    // PAS3: Adaugam produsele modificate in localStorage
    setProducts(localStorageProducts);
    event.target.name.value = "";
    event.target.price.value = "";
    // PAS5: Redenumim lista de produse in HTML
    renderProductList(localStorageProducts);
  });
}

// Intarziem adaugarea functionalitatii formularului (vezi video pentru explicatie).
window.addEventListener("load", addFormFunctionality);
