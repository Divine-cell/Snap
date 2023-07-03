const iconEl = document.querySelector(".icon")
const topNav = document.querySelector(".topnav")

iconEl.addEventListener("click", () => {
  iconEl.classList.toggle("active")
  topNav.classList.toggle("active")
})

