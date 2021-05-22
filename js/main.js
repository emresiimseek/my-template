const hamburger = document.querySelector(".hamburgar-container")
const exit = document.querySelector(".fa-times")
const nav = document.querySelector("nav");

exit.addEventListener("click", () => {

    nav.classList.remove("nav-active");
})

hamburger.addEventListener("click", () => {

    nav.classList.toggle("nav-active");

})