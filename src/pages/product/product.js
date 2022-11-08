import { getSingleProduct, listProductsInCategory } from "../../scripts/api.js"

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
  const product = await getSingleProduct(1)
  const _infos = document.querySelectorAll("[class^=product]")
  _infos.forEach((_info) => {
    const field = _info.classList[0].substring(8)
    if(field == "image") {
      _info.src = product[field]
    } else if(field == "title") {
      _info.innerText = product[field].split(" - ")[0]
    } else {
      _info.innerText = product[field]
    }
  })

  renderProductsByCategory(product.category)
}

renderProduct()