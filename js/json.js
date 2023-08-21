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

// function createCounter(value) {
//   let inc = () => value++;
//   let dec = () => value--;
//   let get = () => value;
//   return { inc, dec, get };
// }

// const { inc, dec, get } = createCounter(5);
// console.log(get()); // 5
// inc();
// inc();
// inc();
// dec();
// console.log(get()); // 7

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
  
//   getArea() {
//     const pi = 3.14;
//     const res = pi * this.radius ** 2;
//     return res.toFixed(2);
//   }
// }

// const circle = new Circle(5);
// console.log(circle.getArea()); // "78.54"

// class Product{
//   constructor(name,price){
//     this.name = name
//     this.price = price
//   }
//   priceWithDiscount(proc) {
//     const res = this.price - this.price / 100 * proc
//     return res
//   }
// }

// const product = new Product("Phone", 1000);
// console.log(product.priceWithDiscount(10)); // 900
// console.log(product.priceWithDiscount(20));
// console.log(product.priceWithDiscount(70));

// class Person {
//   constructor(friends) {
//   this.friends = [];
//   }
//   addFriend(name) {
//   this.friends.push(name);
//   }
//   showFriends() {
//   console.log(this.friends.join(', '));
//   }
//   }

// const person = new Person();
// person.addFriend("Иван");
// person.addFriend("Сергей");
// person.addFriend("Игорь");
// person.showFriends(); // Иван, Сергей, Игорь

// class Animal {
//   constructor(name , favoriteFood){
//     this.name = name
//     this.food = favoriteFood
//   }

//   makeSound() {
//     console.log("Animal sound");
//   }

//   sayName() {
//       console.log("My name is " + this.name);
//   }

//   sayInfo() {
//       console.log(this.name + "s favorite food is " + this.favoriteFood);
//   }

// }

// class Cat extends Animal {
//   makeSound() {
//   console.log("Meow");
//   }
// }
  
// class Dog extends Animal {
//   makeSound() {
//   console.log("Gav!");
//   }
// }

// const dog = new Dog('Rex', 'Meat');
// const cat = new Cat('Barsik', 'Fish');

// cat.makeSound(); // Meow
// dog.makeSound(); // Gav!

// dog.sayName(); // My name is Rex
// cat.sayName(); // My name is Barsik

// dog.sayInfo(); // Rex's favorite food is Meat
// cat.sayInfo(); // Barsik's favorite food is Fish

// const foo = {
//   a:5,
//   baz: function(){
//     console.log(this.a)
//   },
//   bar:  () => {
//     console.log(this.a)
//   }
// }

// foo.bar();
// foo.baz();
const boxFactory = {
	type: 'box',
	count: 0,
	produce: function() {
		this.count++;
		return 'Box №' + this.count;
	}
}

const produceBox = (produceFn) => {
	const boxName = produceFn();
	console.log(boxName);
}

for(let i = 0; i < 25; i++) {
	produceBox(boxFactory.produce);
}


function camelize(srt){
  return srt
    .split('-')
    .map(
      (word,index ) => index == 0 ? word : word[0].toUpperCase() + word.slice(1 )
    )
    .join('')
}
console.log(camelize("background-color") )


camelize("list-style-image") 
camelize("-webkit-transition")