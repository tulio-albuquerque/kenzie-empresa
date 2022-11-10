export function darkmode(){
    const darkMode = document.getElementById('darkMode')
    const darkModeImg = document.getElementById('darkModeImg')
    const darkModeLogo = document.getElementById('logo')
    const darkModeCart = document.getElementById('cart')
    const html = document.querySelector('html')
    const theme = "dark-mode"
    const themeButtonImg = ["/src/assets/icons/darkmode_sun.svg", "/src/assets/icons/darkmode_moon.svg"]
    const logoImg = ["/src/assets/icons/logo_darkmode.png", "/src/assets/icons/logo.svg"]
    // const cartImg = ["/src/assets/icons/cart-shopping-darkmode.png", "src/assets/icons/cart-shopping.svg"]
    let themeState;
    darkMode.addEventListener('click',themeChange)

    function themeChange(){
        themeState = !themeState
        html.classList.toggle(theme)
        localStorage.setItem(theme, themeState);
        themeChangeButtonImg(darkModeImg);
        themeChangeButtonLogo(darkModeLogo)
        // themeChangeButtonCart(darkModeCart)
    }

    function themeChangeButtonImg(darkModeElement){
        themeState
        ? (darkModeElement.src = themeButtonImg[0])
        : (darkModeElement.src = themeButtonImg[1])
    }

    function themeChangeButtonLogo(darkModeElement){
        themeState
        ? (darkModeElement.src = logoImg[0])
        : (darkModeElement.src = logoImg[1])
    }

    // function themeChangeButtonCart(darkModeElement){
    //     themeState
    //     ? (darkModeElement.classList.add("darkmode"))
    //     : (darkModeElement.classList.remove("darkmode"))
    // }

    function themePreferenceAnalysis(){
        themeState = JSON.parse(localStorage.getItem(theme));
        if(themeState){
            themeChangeButtonImg(darkModeImg);
            themeChangeButtonLogo(darkModeLogo)
            // themeChangeButtonCart(darkModeCart)
            html.classList.add(theme)
        }
        else{
            themeChangeButtonImg(darkModeImg)
            themeChangeButtonLogo(darkModeLogo)
            // themeChangeButtonCart(darkModeCart)
        }
    }
    themePreferenceAnalysis()
}
