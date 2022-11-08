const baseUrl = 'https://fakestoreapi.com/'

export async function login(user) {
    const categories = await fetch(baseUrl + 'auth/login',{
        method:'POST',
        body: JSON.stringify(user)
    })

    const response = await categories.json()
    console.log(response)
    //return response
}