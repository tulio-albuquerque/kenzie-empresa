
import { shared } from "../../scripts/forms.js";
import { toastfy } from "../../scripts/toastfy.js";

const BntRegister = document.querySelector('#bntRegister');

BntRegister.addEventListener('click', async (event) => {
    event.preventDefault()
    const validation = await shared()
    if (validation == true) {
        toastfy("Sucesso!", 'Cadastro feito com sucesso ,vamos entrar?')
        setTimeout(() => {
            window.location.replace("../login/login.html")
        }, 3000)
    } else {
        toastfy("Erro!", validation)
        const form = document.querySelector('form');
        form.addEventListener('click', () => {
            const toastfy = document.querySelector('.toastfy');
            toastfy.remove()
        }, { once: true })
    }
})