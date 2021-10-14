/* eslint-disable no-unused-vars */
//IphoneStyle
//section2
let section2H2 = document.querySelector('.logostyle')

function scrolledHandler (){
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    console.log(scrolled)
    section2H2.style.setProperty('--percentage',`${scrolled * 100}%`)
}
document.addEventListener('scroll',scrolledHandler)


//section3
let progress = 0
function run () {
    if (progress < 1){
        progress = parseFloat((progress + 0.01).toFixed(2))//toFixed 取小數點2位 parseFloat 字串轉數字

        document.querySelector('.battery__font').style.setProperty('--progress',progress)//setProperty 將progress設定到css變數

        setTimeout(run,20)//每20毫秒執行一次 run 等於 執行一次 + 0.01 +到1為止
    }
}

document.querySelector('#empty').addEventListener('click', (e) => {
    progress = 0
    document.querySelector('.battery__font').style.setProperty('--progress', progress)
})
  
document.querySelector('#full').addEventListener('click', (e) => {
    run()
})