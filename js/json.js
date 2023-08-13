const button = document.querySelector('.book__add')
const button1 = document.querySelector('.book__deb')
const input = document.querySelector('.input')

const nameArrTest = document.querySelector('.book__column')


const nameArr = document.querySelector('.name')
const nameArr1 = document.querySelectorAll('.name')

// console.log(nameArr1)

// const elementNameArr = nameArr1.innerHTML
// console.log(elementNameArr)



let inputName 
let inputPhone 

const inputNameArr = []
const inputPhoneArr = []
const sortNameArr = []

// sortNameArr.push(elementNameArr)
////////////////////////////////////////////
let list = document.querySelector('#list')
let items = document.querySelectorAll('#list li')




///////////////////////////////////////////


function addInputName(){
    while (inputName = document.getElementsByTagName("input")[0].value != "" && inputNameArr.length < 1){
        inputName = document.getElementsByTagName("input")[0].value
        inputNameArr.push(inputName)
    }
}

function addInputPhone(){
    while (inputPhone = document.getElementsByTagName("input")[1].value != "" && inputPhoneArr.length < 1){
        inputPhone = document.getElementsByTagName("input")[1].value
        inputPhoneArr.push(inputPhone)
    }
}

function addBlockName(){
    const textElement = document.querySelector('.name')
    const textElementContent = textElement.innerHTML
    textElement.innerHTML = inputNameArr 
}

function addBlockPhone(){
    const textElement = document.querySelector('.name__phone')
    const textElementContent = textElement.innerHTML
    textElement.innerHTML = inputPhoneArr 
}

function addMainBlock(){      
    const textElement = document.querySelector('.book__row')
    const cloneTextElement = textElement.cloneNode(true)
    const lessonBlock = document.querySelector('.book__column')
    lessonBlock.append(cloneTextElement)
}

function deleteAllArr(){      
    inputNameArr.pop()
    inputPhoneArr.pop()
}

function call(){      
    addInputName()
    addInputPhone()
    addBlockName()
    addBlockPhone()
    sortArr()
    deleteAllArr()
}



function sortArr(){
    sortNameArr.push(inputNameArr[0])
    sortNameArr.sort()
    console.log(sortNameArr)
}
button.addEventListener('click' , (e) =>{
document.getElementById('book-form').classList.add('non-active')
document.getElementById('add-form').classList.add('active')
addMainBlock()

})

button1.addEventListener('click' , (e) =>{
    document.getElementById('add-form').classList.add('non-active')
    document.getElementById('book-form').classList.remove('non-active')
    document.getElementById('add-form').classList.remove('active')
    call()
    // nameArrTest.remove()
    // list.innerHTML = ''

})

    sortNameArr.forEach(elem =>{
        addInputName()
        addInputPhone()
        addBlockName()
        addBlockPhone()
        sortArr()
        deleteAllArr()
        console.log(elem)
    })


// const elementAgree = document.querySelector('.name')

// const textElementContent = elementAgree.outerHTML
// console.log(textElementContent)

// elementAgree.outerHTML = inputName

