const body = document.getElementById("body")

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




















 











    
