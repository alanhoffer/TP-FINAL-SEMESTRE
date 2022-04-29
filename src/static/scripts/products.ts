let productslist = document.getElementById("productslist");
let btncart = document.getElementById("btncart");
let cart = document.getElementById("cart");
let cartproducts = document.getElementById("cartproducts");
let btnbuyall = document.getElementById("buyall");

let productList: string[][] = [
  ["./src/static/images/products/frutas/anana.jpg", "Anana", "50.50", "10"],
  ["./src/static/images/products/frutas/kiwi.jpg", "Kiwi", "33.50", "20"],
  ["./src/static/images/products/frutas/pera.jpg", "Pera", "22.50", "30"],
  ["./src/static/images/products/frutas/sandia.png", "Sandia", "120.50", "5"],
  ["./src/static/images/products/frutas/naranja.png", "Naranja", "50.50", "50"],

  [
    "./src/static/images/products/harinas/harinapan.jpg",
    "Harina Panificable",
    "500.10",
    "50"
  ],
  [
    "./src/static/images/products/harinas/harinaflorencia.jpg",
    "Harina Florencia",
    "315.10",
    "50"
  ],
  [
    "./src/static/images/products/harinas/harinanevisca.jpg",
    "Harina Nevisca",
    "238.10",
    "50"
  ],
  [
    "./src/static/images/products/harinas/harinacierzo.jpg",
    "Harina Cierzo",
    "200.10",
    "50"
  ],

  [
    "./src/static/images/products/legumbres/frijolesblancos.jpg",
    "Frijoles Blancos",
    "25.30",
    "100"
  ],
  [
    "./src/static/images/products/legumbres/frijolesnegros.jpg",
    "Frijoles Negros",
    "25.30",
    "100"
  ],
  [
    "./src/static/images/products/legumbres/frijolesrojos.jpg",
    "Frijoles Rojos",
    "30.30",
    "100"
  ],
  [
    "./src/static/images/products/legumbres/garbanzos.jpg",
    "Garbanzos",
    "20.30",
    "100"
  ],
  [
    "./src/static/images/products/legumbres/guisantesblancos.jpg",
    "Guisantes Blancos",
    "15.30",
    "100"
  ],
  [
    "./src/static/images/products/legumbres/guisantesverdes.jpg",
    "Guisantes Verdes",
    "15.30",
    "100"
  ],
  [
    "./src/static/images/products/legumbres/lentejasnegras.jpg",
    "Lentejas Negras",
    "28.30",
    "100"
  ],
  [
    "./src/static/images/products/legumbres/lentejasrojas.jpg",
    "Lentejas Rojas",
    "28.30",
    "100"
  ],

  ["./src/static/images/products/verduras/apio.jpg", "Apio", "10.30", "25"],
  [
    "./src/static/images/products/verduras/berenjena.png",
    "Berenjena",
    "70.30",
    "25"
  ],
  [
    "./src/static/images/products/verduras/brocoli.jpg",
    "Brocoli",
    "60.30",
    "25"
  ],
  [
    "./src/static/images/products/verduras/cebolla.jpg",
    "Cebolla",
    "20.30",
    "25"
  ],
  ["./src/static/images/products/verduras/papa.jpg", "Papa", "30.30", "25"],
  [
    "./src/static/images/products/verduras/tomate.jpg",
    "Tomate",
    "100.30",
    "25"
  ],
  [
    "./src/static/images/products/verduras/zanahoria.jpg",
    "Zanahoria",
    "120.30",
    "25"
  ]
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

function addToCart(id: number, cantidad: number) {
  // le asigno la informacion del prudcto que clickie a un array

  let array: string[] = productList[id];
  // chequeo si la cantidad de stock en productlist es menor a la cantidad que quiero comprar
  if (Number(productList[id][3]) < cantidad) {
    alert("No hay stock de este producto");
  } else {
    // si ta todo okey resto la cantidad al stock
    productList[id][3] = String(Number(productList[id][3]) - cantidad);
    // luego multiplico el precio que tengo en el array x la cantidad
    array[2] = String(Number(array[2]) * cantidad);
    // luego le asigno el nombre xcantidad
    array[1] = array[1] + "x" + cantidad;
    // paso el array a la matriz del carrito
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
    const numeroacomprar = document.createElement("input");
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
    prod_price.textContent = "$" + productList[i][2];
    productinfo.appendChild(prod_name);
    productinfo.appendChild(prod_price);

    productinfocontainer.appendChild(productadd);

    button.textContent = "Agregar";
    button.setAttribute("id", i);

    button.addEventListener("click", (e) => {
      let cantidad = document.getElementById("cantidad" + e.target.id);
      addToCart(e.target.id, cantidad.value);
    });

    productadd.appendChild(button);

    buttonmenos.textContent = "-";
    numeroacomprar.setAttribute("value", "1");
    numeroacomprar.setAttribute("id", "cantidad" + i);
    buttonmas.textContent = "+";

    buttonmas.setAttribute("id", i);
    buttonmenos.setAttribute("id", i);
    buttonmas.addEventListener("click", (e) => {
      let cantidad = document.getElementById("cantidad" + e.target.id);
      cantidad?.setAttribute("value", Number(cantidad.value) + 1);
      console.log(cantidad.value);
    });

    buttonmenos.addEventListener("click", (e) => {
      let cantidad = document.getElementById("cantidad" + e.target.id);
      if (cantidad.value > 1) {
        cantidad?.setAttribute("value", Number(cantidad.value) - 1);
      }
      console.log(cantidad.value);
    });

    productquantity.appendChild(buttonmenos);
    productquantity.appendChild(numeroacomprar);
    productquantity.appendChild(buttonmas);

    product.appendChild(productinfocontainer);
    product.appendChild(productquantity);

    productslist.appendChild(product);
  }
}

function exitbuy() {
  let contenedor = document.getElementById("productos-container");
  contenedor?.classList.toggle("contenedor-show");
  let exit_buy = document.getElementById("exitbuy");
  exit_buy?.classList.toggle("exitbuy-show");
}

function buyAll() {
  let final_price: number = 0;
  if (cartList.length < 1) {
    alert("No tienes ningun producto en el carrito");
  } else {
    for (let i: number = 0; i <= cartList.length - 1; i++) {
      final_price = final_price + Number(cartList[i][2]);
    }
    let exitbuy_text = document.getElementById("exitbuy-text");
    let exitbuy_button = document.getElementById("exitbuy-button");

    exitbuy_text?.textContent = "Compra exitosa, Has pagado $" + final_price;
    exitbuy_button?.addEventListener("click", exitbuy);
    exitbuy();
    cartList = [];
  }
}

btnbuyall.addEventListener("click", buyAll);
btncart?.addEventListener("click", showCart);

window.onload = getProducts();
