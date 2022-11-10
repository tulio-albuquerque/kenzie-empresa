export const configFooterExpandInfo = () => {
  const _infos = document.querySelectorAll(".footer-section__header")
  _infos.forEach(_info => {
    _info.addEventListener("click", (event) => {
      const _close = document.querySelector(".show-more")
      const _more = event.currentTarget
      const _body = _more.parentElement.children[1]
      if(_close && _close != _body) {
        _close.classList.toggle("show-more")
      }
      _body.classList.toggle("show-more")
    })
  })
}