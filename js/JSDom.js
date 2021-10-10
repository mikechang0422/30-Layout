//第一部分 比較innerText innerHtml textContent的差別
//1-1.
let DisNoneInnerText = document.querySelector('.DisNone').innerText
console.log('InnerText: ' + DisNoneInnerText)//只有Hello Word!!!!!的部分 因為innerText 只抓的到渲染出來的資料

let DisNoneInnerHTML = document.querySelector('.DisNone').innerHTML
console.log('innerHTML: ' + DisNoneInnerHTML)//因為是抓Html節點的內容物因此連span都有

let DisNoneTextContent = document.querySelector('.DisNone').textContent
console.log('TextContent: ' + DisNoneTextContent)//只抓文字的部分 (含未渲染)

//1-2
DisNoneInnerText = document.querySelector('.DisNone').innerText =
'<span style="font-size:2rem;"> 123 </span>' 
console.log('DisNoneInnerText: ' + DisNoneInnerText)//只當string

DisNoneInnerHTML = document.querySelector('.DisNone').innerHTML =
'<span style="font-size:2rem;"> 123 </span>'
console.log('DisNoneInnerHTML: ' + DisNoneInnerHTML)//tag可讀懂因此在裡面增加span tag

DisNoneTextContent = document.querySelector('.DisNone').textContent =
'<span style="font-size:2rem;"> 123 </span>'
console.log('TextContent: ' + DisNoneTextContent)//跟innerText一樣只當string

//1-3.
let content = document.querySelector('.content')
console.log('content.innerText: ' + content.innerText)//只有文字
console.log('content.innerHTML: ' + content.innerHTML)//含tag全都有
console.log('content.textContent: ' + content.textContent)//有文字跟程式碼的分行

//額外比較 outerHTML outerText
console.log('content.outerText: ' + content.outerText)//跟innerText 一樣
console.log('content.outerHTML: ' + content.outerHTML)//跟innerHTML 一樣

//額外補充 Element.insertAdjacentHTML(position, text)
content.insertAdjacentHTML('beforebegin' , '<span>在 element 之前</span>' )//同層添加
content.insertAdjacentHTML('afterbegin' , '<span>在 element 裡面，第一個子元素之前</span>' )//子層添加
content.insertAdjacentHTML('beforeend' , '<span>在 element 裡面，最後一個子元素之後</span>' )//子層添加
content.insertAdjacentHTML('afterend' , '<span>在 element 之後</span>' )//同層添加

//分隔
console.log('----------------我是分隔線-------------------')

//第二部分 remove removeChild 的區別 .getAttribute()應用
//選取 learnDom區塊
let learnDom = document.querySelector('#learnDom')
//選取 spanHI
let HI = document.querySelector('#HI')
//選取 spanBYE
let BYE = document.querySelector('#BYE')

//刪除BYE
BYE.remove()
//加回來BYE
learnDom.append(BYE)
//刪除HI
learnDom.removeChild(HI)
//加回來HI 可以發現他加在最後
learnDom.appendChild(HI)

//額外補充
// .getAttribute() 查詢元素屬性
//查ID 兩種方法
console.log('HI.getAttribute(\'id\'): ' + HI.getAttribute('id'))
console.log('HI.ID: ' + HI.id)
//查TITLE 兩種方法
console.log('HI.getAttribute(\'title\'): ' + HI.getAttribute('title'))
console.log('HI.title): ' + HI.title)
//查Style 兩種方法 如果選用HI.style則要添加要查的項目 不然則會全部顯示
console.log('HI.getAttribute(\'style\'): ' + HI.getAttribute('style'))
console.log('HI.style.color: ' + HI.style.color)

//.setAttribute() 修改元素屬性
//title 修改 查詢
BYE.setAttribute('title','BYEBYE')
console.log('BYE.setAttribute(\'title\',\'BYEBYE\'): ' + BYE.title)
BYE.title = 'BYEBYEBYE'
console.log('BYE.title = \'BYEBYEBYE\': ' + BYE.title)
//.dataset 新增 修改 查詢 data-
console.log('BYE.dataset: ' + BYE.dataset)
console.log(BYE.dataset)
console.log('BYE.dataset.time: ' + BYE.dataset.time)
BYE.dataset.newtime = '10:11 02:16'
console.log(BYE.dataset)

//.removeAttribute() 刪除元素屬性
BYE.removeAttribute('title')
//空的因為已經被移除了
console.log('BYE.title: ' + BYE.title)

// .classList 新增 修改 查詢 class
HI.classList.add('new-class')
HI.classList.remove('HIHI')
//.toggle沒有則增加class，有則關閉 可用true false強制控制
HI.classList.toggle('HI2')
HI.classList.toggle('HI3',true)
console.log(HI.classList)

//.style 行內樣式
BYE.style.color = 'yellow'
BYE.style.backgroundColor = 'blue'

//分隔
console.log('----------------我是分隔線-------------------')

//第三部分 append appendChild 的差別
//選取到<body>
let body = document.body
//創立一個h2
let h2 = document.createElement('h2')
//添加文字給h2
h2.innerHTML = '<h2 style="font-size:2rem;">第三部分</h2>'
//把h2加到body上
body.append(h2)

//創立一個div
let div = document.createElement('div')

//body.append產生DomString(不會經過編譯直接以字串呈現)，或者產生Node節點
body.append('Hello Word')//直接印在body內

//body.appendChild()產生的會放在子層Element最後面，在這裡不能使用是因為body目前沒有子層Element
//body.appendChild('Hello Word')

//在Div內添加一段字串 (但div還沒告知要創在哪裡因此是看不到)
div.append('div.append(DomString)')

//套用第一部分的內容
div.innerText = 'innerText <span style="display:none;"> || </span> Hello Word'//被div包住
console.log('div.innerText: ' + div.innerText)

div.textContent = 'textContent <span style="display:none;"> || </span> Hello Word'//跟innerText一樣 但如果console.log 原不一樣 參考第一部分
console.log('div.textContent: ' + div.textContent)

div.innerHTML = 'innerHTML <span style="display:none;"> || </span> Hello Word'//則會判讀tag
console.log('div.innerHTML: ' + div.innerHTML)
//顯示個別為何
console.log('div.childNodes: ' + div.childNodes)
console.log('div.textContent: ' + div.textContent)

//告訴網頁body要添加東西 => 東西就是在Dom創立一個<div></div>
body.append(div)
//appendChild在body裡面找到上面append的div並修改文字
body.appendChild(div).textContent = 'Hello Word 2'//如果要看上面的結果這行要//掉不然會蓋掉
console.log('body.appendChild(div).textContent: ' + body.appendChild(div).textContent)

