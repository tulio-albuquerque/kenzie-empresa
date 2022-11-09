import { addProductToCart, getSingleProduct, listProductsInCategory } from "../../scripts/api.js"
import { configFooterExpandInfo } from "../../scripts/footer.js"
import { bntOpen } from "../../scripts/header.js"
import { hideToast, showToast } from "../../scripts/toasts.js"

bntOpen()
const renderProductsByCategory = async (category) => {
  const products = await listProductsInCategory(category)
  const _related = document.querySelector(".related")
  _related.innerHTML = ""

  products.forEach((product) => {
    _related.insertAdjacentHTML("beforeend", `
      <li class="related-product">
        <img src="${product.image}" alt="">
      </li>
    `)
  })
  console.log(products)
}

const renderProduct = async () => {
  const id = localStorage.getItem("productId")
  if(id) {
    const product = await getSingleProduct(id)
    const _infos = document.querySelectorAll("[class^=product]")
    _infos.forEach((_info) => {
      const field = _info.classList[0].substring(8)
      if(field == "image") {
        _info.src = product[field]
      } else if(field == "title") {
        _info.innerText = product[field].split(" - ")[0]
      } else if(field == "price") {
        _info.innerText = `R$ ${product[field]}`
      } else {
        _info.innerText = product[field]
      }
    })

    const _addCart = document.querySelector(".add-cart")
    _addCart.addEventListener("click", () => {
      let cart = []
      const _cartJson = localStorage.getItem("cart")
      const _cart = JSON.parse(_cartJson)
      if(_cart) {
        cart = [..._cart]
      }
      cart.push(product)
      const data = { id }
      addProductToCart(data)
      localStorage.setItem("cart", JSON.stringify(cart))
      showToast("success", 'Produto adicionado')
      setTimeout(hideToast, 1000)
    })

    renderProductsByCategory(product.category)
  }
}

configFooterExpandInfo()
renderProduct()