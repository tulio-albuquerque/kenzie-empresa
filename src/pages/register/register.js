
import { darkmode } from "../../scripts/darkMode.js";
import { configFooterExpandInfo } from "../../scripts/footer.js";
import { shared } from "../../scripts/forms.js";
import { bntOpen } from "../../scripts/header.js";
import { hideToast, showToast } from "../../scripts/toasts.js";
configFooterExpandInfo()
bntOpen()
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
        setTimeout(()=>{hideToast()}, 3000)
    }
})

darkmode()