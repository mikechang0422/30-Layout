//IphoneStyle
//section2
let section2H2 = document.querySelector('.logostyle')

function scrolledHandler (){
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    console.log(scrolled)
    section2H2.style.setProperty('--percentage',`${scrolled * 100}%`)
}
document.addEventListener('scroll',scrolledHandler)
