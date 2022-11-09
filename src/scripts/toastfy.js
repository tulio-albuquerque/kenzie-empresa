
export function toastfy(title,mensage) {
    const body = document.querySelector('body');

    const div = document.createElement('div');
    
    const h3 = document.createElement('h3');
    h3.classList = 'fontTwoBold colorGreySeven'
    h3.innerText = title
    
    const p = document.createElement('p');
    p.classList = "fontFourRegular colorGreySeven"
    p.innerText = mensage
    
    if(title == "Sucesso!"){
        div.classList = 'toastfy toastfySucess'
    }else{
        div.classList ="toastfy toastfyErr"
    }
    div.append(h3,p)

    body.append(div)

}

export const hideToast = () => {
    const _body = document.querySelector("body")
    const _toast = document.querySelector(".toastfy")
    _toast.remove()
}