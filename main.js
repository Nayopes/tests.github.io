const body = document.getElementById("body")
const width = 260+'px'
const height = 480+'px'
let nkar = ['book1.jpg','book2.jpg','book3.jpg']
let  headText = ['George Orwell', 'Erich Remarque', 'Sergey Yesenin']
let paragraphs = ['Book is a dystopian social science fiction novel by English novelist George Orwell.', 
                  'Book is a novel by Erich Maria Reamrque, which appeared both in German and in English in 1952.', 
                  'Book is a collection of famous poems by Russian lyric poet of the 20-th century Sergey Yesenin. ']

let main = document.createElement("div")
main.style.display = 'flex'
body.appendChild(main)

for (i=0; i<nkar.length; i++){
    const div = document.createElement("div")
    let img = document.createElement("img")
    div.style.border = '1px solid #6f6f6f'
    div.style.backgroundColor = '#f5eae6'
    div.style.width = width
    div.style.height = height
    div.style.display = 'flex'
    div.style.position = 'relative'
    div.style.marginLeft = '50px'  
   //images 
    img.src = "`${nkar[i]}`"
    img.style.border = '1px solid #a3a3a3'
    img.style.width = '200px'
    img.style.height = '250px'
    img.style.position = 'absolute'
    img.style.left = '28px'
    img.style.top = '10px'
    main.appendChild(div)
    div.appendChild(img)
   //headings
    const heading = document.createElement("h2")
    div.appendChild(heading)
    heading.style.position = 'absolute'
    heading.style.top = '250px'
    heading.style.left = '30px'
    heading.style.alignItems = 'center'
    heading.style.color = '#470134'
    heading.style.fontFamily = 'arial'
    for (let x =0, title = document.getElementsByTagName("h2"); x<title.length; x++){
         title[i].innerHTML = headText[i]
    }
   //paragraphs
    const p = document.createElement("p")
    div.appendChild(p)
    p.style.position = 'absolute'
    p.style.top = '290px'
    p.style.left = '30px'
    p.style.color = '#62525e'
    p.style.fontFamily = 'arial'
    p.style.width = '200px'
    for (let y=0, text = document.getElementsByTagName("p"); y<text.length; y++){
        text[i].innerHTML = paragraphs[i]
    }
   //sumbits
    const buy = document.createElement("button")
    div.appendChild(buy)
    buy.innerHTML = 'Buy me now!'
    buy.style.position = 'absolute'
    buy.style.left = '30px'
    buy.style.top = '400px'
    buy.style.width = '100px'
    buy.style.height = '30px'
    buy.style.borderRadius = '5px'
    buy.style.backgroundColor = 'transparent'
    buy.style.borderStyle = 'solid'
    buy.setAttribute('onclick', 'handle()')
    function handle () {
       heading.style.color = '#ffd2e7' 
       p.style.color = '#dcccd8'   
       div.style.backgroundColor = '#492435'
       buy.style.color = 'white'
    }
}
//===Second===
const form = document.createElement("form")
body.appendChild(form)
form.style.margin = '50px'

const question = document.createElement("h3")
form.appendChild(question)
question.innerHTML = 'Արշակ 2-րդի կառավարման սկիզբ'
const input = document.createElement("input")
form.appendChild(input)

input.type = 'text'
input.placeholder = 'Նշիր միայն տարեթիվը'
input.style.width = '220px'
input.style.height = '30px'
input.style.marginRight = '10px'
input.style.borderRadius = '5px'
input.style.borderStyle = 'solid'

const choose = document.createElement("select")
form.appendChild(choose)
choose.name = 'dar'
choose.style.width = '80px'
choose.style.height = '30px'
choose.style.marginRight = '10px'

let option1 = document.createElement("option")
choose.appendChild(option1)
option1.value = 'մ․թ․ա․'
option1.innerHTML= 'մ․թ․ա․'
let option2 = document.createElement("option")
choose.appendChild(option2)
option2.value ='մ․թ․'
option2.innerHTML= 'մ․թ․'

const btn = document.createElement("button")
form.appendChild(btn)
btn.style.width = '90px'
btn.style.height = '30px'
btn.innerHTML = 'Փորձիր քեզ'
btn.setAttribute ('onclick', 'answer()')
function answer(){ if(input.value =='350' && choose.value == 'մ․թ․'){
    form.remove()
    const form1 = document.createElement("form")
    body.appendChild(form1)
    form1.style.margin = '50px'

    const question1 = document.createElement("h3")
    form1.appendChild(question1)
    question1.innerHTML = 'Տիգրան Մեծի կառավարման սկիզբ'
    const input1 = document.createElement("input")
    form1.appendChild(input1)

    input1.type = 'text'
    input1.placeholder = 'Նշիր միայն տարեթիվը'
    input1.style.width = '220px'
    input1.style.height = '30px'
    input1.style.marginRight = '10px'
    input1.style.borderRadius = '5px'
    input1.style.borderStyle = 'solid'

    const choose1 = document.createElement("select")
    form1.appendChild(choose1)
    choose1.name = 'dar'
    choose1.style.width = '80px'
    choose1.style.height = '30px'
    choose1.style.marginRight = '10px'

    let option1_1 = document.createElement("option")
    choose1.appendChild(option1_1)
    option1_1.value = 'մ․թ․ա․'
    option1_1.innerHTML= 'մ․թ․ա․'
    let option2_2 = document.createElement("option")
    choose.appendChild(option2)
    option2_2.value ='մ․թ․'
    option2_2.innerHTML= 'մ․թ․'

    const btn1 = document.createElement("button")
    form1.appendChild(btn1)
    btn1.style.width = '90px'
    btn1.style.height = '30px'
    btn1.innerHTML = 'Փորձիր քեզ'
}
else{
    form.remove()
    let abuse = document.createElement("h1")
    body.appendChild(abuse)
    abuse.innerHTML = 'Անցար պատմություն սովորելու։'
}  
}




















 











    
