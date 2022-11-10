export function saveLocal(token){
    const key = JSON.stringify(token)
    localStorage.setItem("authorization", key)
}
export function saveicon(user){
    const key = JSON.stringify(user)
    localStorage.setItem("people", key)
}
export function returPeaple(){
    const returPeaple = localStorage.getItem("people")
    const people = JSON.parse(returPeaple)
    return people
}