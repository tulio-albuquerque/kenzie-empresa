import { darkmode } from "../../scripts/darkMode.js"
import { configFooterExpandInfo } from "../../scripts/footer.js"
import { bntOpen} from "../../scripts/header.js"
import { saveicon } from "../../scripts/localstorage.js"
const initial = () => {
    darkmode()
    bntOpen()
    configFooterExpandInfo()
    const bntLogin = document.querySelector('figure')
    console.log(bntLogin);
    [bntLogin].forEach(imgUser => {
        imgUser.addEventListener('click',(e) => {
            const img = e.target
            saveicon(img.alt)
            window.location.replace('../creater/creater.html')
        })
    });
}
initial()

