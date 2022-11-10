export const showToast = (status, message) => {
  const _toastWrapper = document.querySelector("#toast")
  const _toast = document.querySelector(".toast")
  const _message = document.querySelector(".toast-message")
  _message.innerText = message
  _toast.classList = `toast ${status}`
  _toastWrapper.classList.add("show-toast")

}

export const hideToast = () => {
  const _toastWrapper = document.querySelector("#toast")
  _toastWrapper.classList.remove("show-toast")
}