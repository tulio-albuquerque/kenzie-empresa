import { addProductToCart, getAllCategories, getAllProducts, getSingleUser, listProductsInCategory } from "./src/scripts/api.js";
import { configFooterExpandInfo } from "./src/scripts/footer.js";
import { hideToast, showToast } from "./src/scripts/toasts.js";

configFooterExpandInfo()

const allProducts = await getAllProducts()
let allCategories = await getAllCategories()


const cart = document.getElementById('cart')
cart.addEventListener('click', () => {
    window.location.href = "/src/pages/cart/cart.html"
})
const noFilter = document.getElementById('noFilter')
noFilter.addEventListener('click', () => {
    productsCards(allProducts)
})


function productsCards(array) {
    const cardsContainer = document.getElementById('listProducts')
    cardsContainer.innerHTML = ""
    array.forEach((product) => {
        let cardContent = document.createElement("li")
        let productImgContainer = document.createElement('figure')
        let productImg = document.createElement("img")
        let productMarketDescription = document.createElement('div')
        let productMainInfo = document.createElement('div')
        let productName = document.createElement("p")
        let productCategory = document.createElement("p")
        let productDescription = document.createElement("p")
        let productBuy = document.createElement("div")
        let productPrice = document.createElement("p")
        let addCartButton = document.createElement("button")

        cardContent.id = product.id
        productImg.id = product.id
        productImg.addEventListener('click', () => {
            localStorage.setItem("productId", product.id)
            window.location.href = "/src/pages/product/product.html"
        })

        cardContent.classList = "card"
        productMarketDescription.classList = "productDescription container"
        productMainInfo.classList = "productInfo"
        productName.classList = "fontTwoBold cardTitle"
        productCategory.classList = "bntFive fontFourSemibold productCategory"
        productPrice.classList = "fontOneSemibold"

        addCartButton.id = product.id
        addCartButton.innerText = "Adicionar ao Carrinho"
        addCartButton.classList = "bntTree"
        addCartButton.addEventListener('click', (event) => {
            const _button = event.target
            const id = _button.id
            let cart = []
            let json = localStorage.getItem("authorization")
            let user = JSON.parse(json)
            let _cartJson = localStorage.getItem("cart")
            let _cart = JSON.parse(_cartJson)
            if(_cart) {
                cart = [..._cart]
            }
            if(user.token) {
                let today = new Date().toLocaleDateString()
                const findProduct = cart.findIndex((item) => item.id == id)
                if(findProduct == -1) {
                    const body = {
                        "id": id
                    }
                    cart.push(product)
                    localStorage.setItem("cart", JSON.stringify(cart))
                    addProductToCart(body)
                    showToast("success", 'Produto adicionado')
                    setTimeout(hideToast, 1000)
                } else {
                    showToast("alert", 'Produto já adicionado')
                    setTimeout(hideToast, 1000)
                }
            } else {        
                showToast("alert", 'Favor fazer o login')
                setTimeout(hideToast, 1000)
            }
        })
        productImg.src = product.image
        productImg.alt = product.title
        productName.innerText = product.title
        productCategory.innerText = product.category
        productPrice.innerText = `R$:${product.price}`
        productDescription = product.description

        productMainInfo.append(productName, productCategory)
        productImgContainer.append(productImg)
        productBuy.append(productPrice, addCartButton)
        productMarketDescription.append(productMainInfo, productBuy)
        cardContent.append(productImgContainer, productMarketDescription)
        //cardContent.append(productImg, productMarketDescription)
        cardsContainer.append(cardContent)

    })

}
productsCards(allProducts)


function renderFilterButtons(array) {
    const main = document.getElementsByClassName('filterButtonContainer')[0]
    array.forEach((category) => {
        let button = document.createElement('button')
        button.innerText = category
        button.value = category
        button.classList = "bntTwo"
        button.addEventListener('click', () => {
            categoryList(category)
        })
        main.appendChild(button)
    })
}
renderFilterButtons(allCategories)

async function categoryList(category) {
    let categoryProducts = await listProductsInCategory(category)
    productsCards(categoryProducts)
}

getSingleUser(1)
async function userInfo(object) {

}