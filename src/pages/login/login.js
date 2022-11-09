import { configFooterExpandInfo } from "../../scripts/footer.js"
import { shared } from "../../scripts/forms.js"
import { hideToast, showToast } from "../../scripts/toasts.js"
const initial = () => {
    configFooterExpandInfo()
    const bntLogin = document.querySelector('form')
    bntLogin.addEventListener('submit', async (e) => {
        e.preventDefault()
        const valid = await shared()
        if (valid) {
            showToast("success", "Login feito com sucesso Agarde um instante enquanto te direcionamos")
            setTimeout(() => {
                window.location.replace('../../../index.html')
            }, 2000);
        } else {
            showToast("alert" , 'Email ou senha invalido!')
            setTimeout(()=>{hideToast()}, 3000)
        }
    })
}

initial()

