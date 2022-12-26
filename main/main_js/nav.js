const nav = document.getElementsByClassName('nav')
console.log(nav)
window.addEventListener('scroll',function () {
    if (document.documentElement.scrollTop > 20) {
        nav[0].classList.add("fixed")

    }
    else {
        nav[0].classList.remove("fixed")
    }
})
