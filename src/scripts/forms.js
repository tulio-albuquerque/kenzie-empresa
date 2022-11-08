import { login, register } from "./api.js";

export async function shared() {
    const form = document.querySelector("form");
    const elements = [...form.elements]
    const typeBody = []
    elements.forEach(element => {
        if (element.tagName == "INPUT" && element.value !== "") {
            typeBody[element.id] = element.value
        }
    });
    const body = { ...typeBody }
    if (form.id == "login") {
        const validation = await login(body)
        return validation
    } else if (form.id == "register") {
        const validation = await register(body)
        return validation
    }
}


