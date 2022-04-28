let productslist = document.getElementById("productslist");
let btncart = document.getElementById("btncart");
let cart = document.getElementById("cart");
let cartproducts = document.getElementById("cartproducts");
let btnbuyall = document.getElementById("buyall");

let productList: string[][] = [
  ["./src/static/images/products/frutas.jpg", "Kiwi", "199.50", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "139.25", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "129", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "39", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "49.50", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "199", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "199", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "199", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "199", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "199", "3"],
  ["./src/static/images/products/frutas.jpg", "Kiwi", "199", "3"]
];

let cartList: string[][] = [];

function getCart() {
  cartproducts?.innerHTML = null;
  for (let i = 0; i < cartList.length; i++) {
    const product = document.createElement("div");
    product.classList.add("cartproduct");

    const image_container = document.createElement("div");
    const img = document.createElement("img");
    image_container.classList.add("cartimage");

    img.src = cartList[i][0];

    image_container.appendChild(img);
    product.appendChild(image_container);

    const description_container = document.createElement("div");
    const prod_name = document.createElement("h1");
    description_container.classList.add("cartdescription");
    prod_name.textContent = cartList[i][1];
    description_container.appendChild(prod_name);
    product.appendChild(description_container);

    const prod_price = document.createElement("h2");

    prod_price.textContent = "$" + cartList[i][2];

    description_container.appendChild(prod_price);

    cartproducts.appendChild(product);
  }
}

function showCart() {
  cart?.classList.toggle("cart-show");
  getCart();
}

function addToCart(id: number) {
  let array: string[] = productList[id];
  if (Number(productList[id][3]) < 1) {
    alert("No hay stock de este producto");
  } else {
    productList[id][3] = String(Number(productList[id][3]) - 1);
    cartList.push(array);
  }
}

function getProducts() {
  for (let i = 0; i < productList.length; i++) {
    const product = document.createElement("div");
    const productinfocontainer = document.createElement("div");
    const productimage = document.createElement("div");
    const img = document.createElement("img");
    const productinfo = document.createElement("div");
    const prod_name = document.createElement("h3");
    const prod_price = document.createElement("p");
    const productadd = document.createElement("div");
    const button = document.createElement("button");
    const productquantity = document.createElement("div");
    const buttonmenos = document.createElement("button");
    const numeroacomprar = document.createElement("p");
    const buttonmas = document.createElement("button");

    product.classList.add("product-item");
    productinfocontainer.classList.add("productinfo-container");
    productimage.classList.add("product-image");
    productinfo.classList.add("product-info");
    productadd.classList.add("product-add");
    productquantity.classList.add("product-quantity");

    productinfocontainer.appendChild(productimage);

    img.src = productList[i][0];
    productimage.appendChild(img);

    productinfocontainer.appendChild(productinfo);

    prod_name.textContent = productList[i][1];
    prod_price.textContent = productList[i][2];
    productinfo.appendChild(prod_name);
    productinfo.appendChild(prod_price);

    productinfocontainer.appendChild(productadd);

    button.textContent = "Agregar";

    button.addEventListener("click", () => addToCart(i));

    productadd.appendChild(button);

    buttonmenos.textContent = "-";
    numeroacomprar.textContent = "1";
    buttonmas.textContent = "+";
    buttonmenos.addEventListener("click", () => restarcantidad());
    buttonmas.addEventListener("click", () => sumarcantidad());

    productquantity.appendChild(buttonmenos);
    productquantity.appendChild(numeroacomprar);
    productquantity.appendChild(buttonmas);

    product.appendChild(productinfocontainer);
    product.appendChild(productquantity);

    productslist.appendChild(product);
  }
}

function buyAll() {
  let final_price: number = 0;
  if (cartList.length < 1) {
    alert("No tienes ningun producto en el carrito");
  } else {
    for (let i: number = 0; i <= cartList.length - 1; i++) {
      final_price = final_price + Number(cartList[i][2]);
    }
    alert("Compra exitosa, Has pagado $" + final_price);
    cartList = [];
  }
}

btnbuyall.addEventListener("click", buyAll);
btncart?.addEventListener("click", showCart);

window.onload = getProducts();
