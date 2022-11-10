export function bntOpen() {
    const bntOpen = document.querySelector('.bntMore')

    bntOpen.addEventListener('click', (e) => {
        const bnt = e.target
        const bntMore = bnt.closest('article')
        bntMore.classList.toggle("change");

        const nav = document.querySelector('.nav')
        nav.classList.toggle('open')
    })
}