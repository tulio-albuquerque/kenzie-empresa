import { login, register } from "./api.js";

export async function shared() {
    const form = document.querySelector("form");
    const elements = [...form.elements]
    const body = {}
    elements.forEach(element => {
        if (element.tagName == "INPUT" && element.value !== "") {
            body[element.id] = element.value
        }
    });
    if (form.id == "login") {
        const validation = await login(body)
        return validation
    } else if (form.id == "register") {
        if (!body.length) {
            return 'preencha todos os campos'
        }else{
            const validation = await register(body)
             return validation
        }
    }
}


