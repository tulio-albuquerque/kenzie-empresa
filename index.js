import { addProductToCart, getAllCategories, getAllProducts, getSingleUser, listProductsInCategory } from "./src/scripts/api.js";
import { darkmode } from "./src/scripts/darkMode.js";
import { configFooterExpandInfo } from "./src/scripts/footer.js";
import { bntOpen } from "./src/scripts/header.js";
import { hideToast, showToast } from "./src/scripts/toasts.js";


const renderpage = async () => {
    darkmode()
    bntOpen()
    const allProducts = await getAllProducts()
    const allCategories = await getAllCategories()
    productsCards(allProducts)
    renderFilterButtons(allCategories)
    getSingleUser(1)
    configFooterExpandInfo()
}
renderpage()


const cart = document.getElementById('cart')
cart.addEventListener('click', () => {
    window.location.href = "/src/pages/cart/cart.html"
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

        productMainInfo.append(productName, productCategory)
        productImgContainer.append(productImg)
        productBuy.append(productPrice, addCartButton)
        productMarketDescription.append(productMainInfo, productBuy)
        cardContent.append(productImgContainer, productMarketDescription)
        cardsContainer.append(cardContent)

    })

}
function renderFilterButtons(array) {
    const main = document.querySelector('nav')
    main.innerHTML = '<button id="noFilter" class="bntTwo">Todos</button>'
    array.forEach((category) => {
        let button = document.createElement('button')
        button.innerText = category
        button.value = category
        button.classList = "bntTwo"
        button.addEventListener('click', () => {
            categoryList(category)
        })
        main.append(button)
    })
    bntNofilter()
}

async function categoryList(category) {
    let categoryProducts = await listProductsInCategory(category)
    productsCards(categoryProducts)
}
const bntNofilter = () => {
    const noFilter = document.getElementById('noFilter')
    noFilter.addEventListener('click', () => {
        productsCards(allProducts)
    })
}
