const contentList = document.querySelectorAll('.main-content')

scrollLoad()

window.addEventListener('scroll',scrollLoad)

function scrollLoad() {
    contentList.forEach(content => {
        const contentTop = content.getBoundingClientRect().top

        const triggerHeight = window.innerHeight*0.8

        if (contentTop <= triggerHeight) {
            content.classList.add('show')
        }else {
            content.classList.remove('show')
        }
    })
}
