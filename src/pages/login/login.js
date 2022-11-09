import { configFooterExpandInfo } from "../../scripts/footer.js"
import { shared } from "../../scripts/forms.js"
import { toastfy } from "../../scripts/toastfy.js"
const initial = () => {
    configFooterExpandInfo()
    const bntLogin = document.querySelector('form')
    bntLogin.addEventListener('submit', async (e) => {
        e.preventDefault()
        const valid = await shared()
        if (valid) {
            toastfy("Sucesso!", "Login feito com sucesso Agarde um instante enquanto te direcionamos")
            setTimeout(() => {
                window.location.replace('../../../index.html')
            }, 2000);
        } else {
            toastfy("Erro!" , 'Email ou senha invalido!')
            const form = document.querySelector('form');
            form.addEventListener('click', () => {
                const toastfy = document.querySelector('.toastfy');
                toastfy.remove()
            }, { once: true })
        }
    })
}

initial()

