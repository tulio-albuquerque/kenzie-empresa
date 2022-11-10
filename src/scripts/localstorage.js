export function saveLocal(token){
    const key = JSON.stringify(token)
    localStorage.setItem("authorization", key)
}