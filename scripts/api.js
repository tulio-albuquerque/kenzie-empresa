import { saveLocal } from "./localstorage.js"

const baseUrl = 'https://fakestoreapi.com/'

export async function login(user) {
    const loginUser = await fetch(baseUrl + 'auth/login', {
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

