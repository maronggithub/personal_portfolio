const nav = document.getElementsByClassName('nav')
const home = document.getElementById('home')
const project = document.getElementById('project')
const aboutMe = document.getElementById('aboutMe')
const contact = document.getElementById('contact')

home.addEventListener('click',function() {
    window.location.href = '/index.html'
})
project.addEventListener('click',function() {
    window.location.href = '/main/main_html/projects.html'
})
aboutMe.addEventListener('click',function() {
    window.location.href = '/main/main_html/about_me.html'
})
contact.addEventListener('click',function() {
    window.location.href = '/main/main_html/contact.html'
})

//navigation bar is fiexd when being scrolled
window.addEventListener('scroll',function () {
    if (document.documentElement.scrollTop > 0) {
        nav[0].classList.add("fixed")

    }
    else {
        nav[0].classList.remove("fixed")
    }
})
