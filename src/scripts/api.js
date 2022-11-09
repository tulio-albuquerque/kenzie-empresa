import { saveLocal } from "./localstorage.js"

const fakeshop = "http://api.fakeshop-api.com"

const fakestoreapi = "https://fakestoreapi.com"

// export const listProductsInCategory = async (category) => {
//     const response = await fetch(`${fakeStore}/products/category/${category}`)
//         .then(res => res.json())

//     return response
// }

export async function login(user) {
  console.log(user)
    const loginUser = await fetch(`${fakeshop}/users/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    fetch('https://fakestoreapi.com/users')
    if (loginUser.ok) {
        const response = await loginUser.json()
        saveLocal(response)
        return true
    } else {
        return false
    }
}

export async function register(user) {

    const loginUser = await fetch(`${fakeshop}/users/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    if (loginUser.ok) {
        return true
    } else {
        return false
    }
}

export async function getAllProducts(){
  try{
    const products = await fetch(`${fakestoreapi}/products`, {
      method: "GET"
    });
    const productsInfo = await products.json()
    return productsInfo
  }
  catch(error){
    console.log(error)
  }
}

export const getSingleProduct = async (id) => {
    const response = await fetch(`${fakestoreapi}/products/${id}`)
        .then(res => res.json())

    return response
}

export const listProductsInCategory = async (category) => {
    const response = await fetch(`${fakestoreapi}/products/category/${category}`)
        .then(res => res.json())
    return response
}
  
export async function getAllCategories(){
    try{

      const categories = await fetch(`${fakestoreapi + "/products/categories"}`, {

        method: "GET"
      });
      let categoryList = await categories.json()
      return categoryList
    }
    catch(error){
      console.log(error)
    }
  }
  
  export async function getSingleUser(id){
    try{
      const user = await fetch(`${fakestoreapi + `/users/${id}`}`, {
        method: "GET"
      });
      let userInfo = await user.json()
      console.log(userInfo)
    }
    catch(error){
      console.log(error)
    }
  }
  
  export async function addProductToCart(body){
    try{
    const product = await fetch('https://fakestoreapi.com/carts',{
      method:"POST",
      body:JSON.stringify(body)
  });
   let productInfo = await product.json()
   console.log(productInfo)
   return productInfo
  }
  catch(error){
    console.log(error)
  }}