import { darkmode } from "../../scripts/darkMode.js";
import { bntOpen } from "../../scripts/header.js";
import { showToast, hideToast } from "../../scripts/toasts.js";

darkmode();
bntOpen()
function createLiProductCart(product) {
    const ulProducts = document.querySelector(".products");

    const li = document.createElement('li');
    li.classList.add("product");

    const imgProduct = document.createElement('img');
    imgProduct.src = product.image;

    const divInfoProduct = document.createElement('div');
    divInfoProduct.classList.add("info-product");

    const namePrice = document.createElement("div");
    namePrice.classList.add("name-price");

    const spanNameProduct = document.createElement("span");
    spanNameProduct.innerText = product.title;

    const spanPrice = document.createElement("span");
    spanPrice.innerText = product.price.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'});

    const productDescription = document.createElement("div");
    productDescription.classList.add("description");

    const spanDescription = document.createElement("span");
    spanDescription.innerText = product.description;

    const divBtns = document.createElement('div');
    divBtns.classList.add("btns");

    const divSelect = document.createElement("div");
    divSelect.classList.add("select");

    const labelSpanNameSelectQty = document.createElement("label");

    const spanNameSelectQty = document.createElement("span");
    spanNameSelectQty.innerText = 'Qty';
    
    const select1 = document.createElement("select");
    
    const optionDefault = document.createElement("option");
    optionDefault.value = "1";
    optionDefault.innerText = 1;

    const btnCheckout = document.createElement("button");
    btnCheckout.classList.add("checkout");
    btnCheckout.innerText = 'Checkout';

    namePrice.append(spanNameProduct, spanPrice);
    labelSpanNameSelectQty.appendChild(spanNameSelectQty);
    select1.append(optionDefault);
    divSelect.append(labelSpanNameSelectQty, select1);
    productDescription.append(spanDescription, divBtns, divSelect);
    divInfoProduct.append(namePrice, productDescription, btnCheckout);
    li.append(imgProduct, divInfoProduct);
    ulProducts.appendChild(li);

}

function renderCarts() {
    const productsCart = JSON.parse(localStorage.getItem('cart'));

    const quantity = document.getElementById('quantity-products');
    quantity.innerText = `${productsCart.length} Item`;

    productsCart.forEach(product => {
        createLiProductCart(product);
    });
}

function payment() {
    const btnAll = document.querySelector(".checkoutAll");
    const ul = document.querySelector(".products");
    btnAll.addEventListener("click", ()=> {
        ul.innerHTML = '';
        const quantity = document.getElementById("quantity-products");
        quantity.innerHTML = `0 Item`;
        showToast("success", "Parabéns! Sua compra foi efetuada com sucesso");
        setTimeout(()=> {
            hideToast()
        }, 2000)
        localStorage.removeItem("cart");
    })
};

payment();
renderCarts();
renderQuantity();
