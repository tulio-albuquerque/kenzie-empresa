import { saveLocal } from "./localstorage.js"

const baseURL = "https://fakestoreapi.com"

export const getSingleProduct = async (id) => {
  const response = await fetch(`${baseURL}/products/${id}`)
            .then(res=>res.json())

  return response
}


export const listProductsInCategory = async (category) => {
  const response = await fetch(`${baseURL}/products/category/${category}`)
            .then(res=>res.json())
  
  return response
}

export async function login(user) {
    const loginUser = await fetch(`${baseURL}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    if(loginUser.ok){
        const response = await loginUser.json()
        saveLocal(response)
        return true
    }else{
        return false
    }
}

