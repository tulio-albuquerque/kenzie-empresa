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
        addCartButton.addEventListener('click', () => {
            let userId = localStorage.getItem("User")
            if(userId) {
                let today = new Date().toLocaleDateString()
                const body = {
                    userId: userId,
                    date: today,
                    products: [{ productId: product.id, quantity: 1 }]
                }
                addProductToCart(body)        
                showToast("success", 'Cadastro feito com sucesso ,vamos entrar?')
                setTimeout()
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