import { saveLocal } from "./localstorage.js"

const baseURL = "https://fakestoreapi.com"

export const getSingleProduct = async (id) => {
    const response = await fetch(`${baseURL}/products/${id}`)
        .then(res => res.json())

    return response
}

export const listProductsInCategory = async (category) => {
    const response = await fetch(`${baseURL}/products/category/${category}`)
        .then(res => res.json())

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

    fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>console.log(json))
    if (loginUser.ok) {
        const response = await loginUser.json()
        saveLocal(response)
        return true
    } else {
        return false
    }
}

export async function register(user) {

    const loginUser = await fetch(`${baseURL}/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                email:user.email,
                username: user.username,
                password: user.password,
                name: {
                    firstname: user.firstname,
                    lastname:user.lastname
                },
                address: {
                    city: user.city,
                    street: user.street,
                    number:user.number,
                    zipcode: user.zipcode,
                    geolocation: {
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone: user.phone
            })
    })
    if (loginUser.ok) {
        return true
    } else {
        return false
    }
}
