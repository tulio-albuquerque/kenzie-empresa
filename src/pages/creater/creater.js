import { users } from "../../scripts/createUsers.js"
import { darkmode } from "../../scripts/darkMode.js"
import { configFooterExpandInfo } from "../../scripts/footer.js"
import { bntOpen } from "../../scripts/header.js"
import { returPeaple } from "../../scripts/localstorage.js"
const initial = () => {
    darkmode()
    bntOpen()
    configFooterExpandInfo()
    const peaple = returPeaple()
    const user =  users.find(element => element.user == peaple)
    renderPage(user)

}

initial()

function renderPage(user) {
    console.log(user)
    const  img = document.querySelector('#image')
    img.src =`../${user.img}`
    const  facebook = document.querySelector('#facebook')
    facebook.href = user.redes.facebook
    const  linkedin = document.querySelector('#linkedin')
    linkedin.href = user.redes.linkedin
    const  Instagran = document.querySelector('#Instagran')
    Instagran.href = user.redes.Instagran
}