export function darkmode(){
    const darkMode = document.getElementById('darkMode')
    const darkModeImg = document.getElementById('darkModeImg')
    const html = document.querySelector('html')
    const theme = "dark-mode"
    const themeButtonImg = ["/src/assets/icons/darkmode_sun.svg", "/src/assets/icons/darkmode_moon.svg"]
    let themeState;
    darkMode.addEventListener('click',themeChange)

    function themeChange(){
        themeState = !themeState
        html.classList.toggle(theme)
        localStorage.setItem(theme, themeState);
        themeChangeButtonImg(darkModeImg);
    }

    function themeChangeButtonImg(darkModeElement){
        themeState
        ? (darkModeElement.src = themeButtonImg[0])
        : (darkModeElement.src = themeButtonImg[1])
    }

    function themePreferenceAnalysis(){
        themeState = JSON.parse(localStorage.getItem(theme));
        if(themeState){
            themeChangeButtonImg(darkModeImg);
            html.classList.add(theme)
        }
        else{
            themeChangeButtonImg(darkModeImg)
        }
    }
    themePreferenceAnalysis()
}