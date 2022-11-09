
import { configFooterExpandInfo } from "../../scripts/footer.js";
import { shared } from "../../scripts/forms.js";
import { showToast } from "../../scripts/toasts.js";
configFooterExpandInfo()
const BntRegister = document.querySelector('form');

BntRegister.addEventListener('submit', async (event) => {
    event.preventDefault()
    const validation = await shared()
    if (validation == true) {
        showToast("success", 'Cadastro feito com sucesso ,vamos entrar?')
        setTimeout(() => {
          window.location.replace("../login/login.html")
        }, 3000)
    } else {
        showToast("alert", validation)
        const form = document.querySelector('form');
        form.addEventListener('click', () => {
            const toastfy = document.querySelector('.toastfy');
            toastfy.remove()
        }, { once: true })
    }
})