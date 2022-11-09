import { saveLocal } from "./localstorage.js"

const fakeStore = "https://fakestoreapi.com"

const baseURL = "http://api.fakeshop-api.com"



export const getSingleProduct = async (id) => {
    const response = await fetch(`${baseURL}/products/${id}`)
        .then(res => res.json())

    return response
}

export const getAllProducts = async () => {
  const response = await fetch(`${fakeStore}/products/`)
        .then(res => res.json())

  return response
}

export const listProductsInCategory = async (category) => {
    const response = await fetch(`${baseURL}/products/category/${category}`)
        .then(res => res.json())

    return response
}

export async function login(user) {
  console.log(user)
    const loginUser = await fetch(`${baseURL}/users/signin`, {
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

    const loginUser = await fetch(`${baseURL}/users/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    console.log(loginUser);
    if (loginUser.ok) {
        return true
    } else {
        return false
    }
}
  
export async function getAllCategories(){
    try{
      const categories = await fetch(`${baseURL}/products/categories`, {
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
      const user = await fetch(`${baseURL}/users/${id}`, {
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