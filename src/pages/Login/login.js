import { sherad } from "../../../scripts/forms.js"
import { toastfy } from "../../../scripts/toastfy.js"
const initial = () => {
    const bntLogin = document.querySelector('#submit')
    bntLogin.addEventListener('click', async (e) => {
        e.preventDefault()
        const valid = await sherad()
        if (valid) {
            toastfy("Sucesso!", "Login feito com sucesso Agarde um instante enquanto te direcionamos")
            setTimeout(() => {
                window.location.replace('../../../index.html')
            }, 2000);
        } else {
            toastfy("Erro!", 'Email ou senha invalido!')
            const form = document.querySelector('form');
            form.addEventListener('click', () => {
                const toastfy = document.querySelector('.toastfy');
                toastfy.remove()
            }, { once: true })
        }
    })
}

initial()

