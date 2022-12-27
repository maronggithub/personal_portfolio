const contentList = document.querySelectorAll('.main-content')
const codeBtnList = document.querySelectorAll('.codeBtn')
const sitebtnList = document.querySelectorAll('.siteBtn')


codeBtnList.forEach((codeBtn,index) => {
    codeBtn.addEventListener('click',function() {
        window.open(`https://github.com/maronggithub/portfolio-projects/tree/main/my_projects/No.${index + 1}`)
    })
})

sitebtnList.forEach((siteBtn,index) => {
    siteBtn.addEventListener('click',function() {
        window.open(`../../my_projects/No.${index+1}`)
    })
})

//animation function
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
