let contacts = [
  {name: "Йоска", phone: "+7(999)111-22-33", icon: "./img/check.png", favorite: true},
  {name: "Заурчик", phone: "+7(888)444-55-66", icon: "user2.png", favorite: false},
  {name: "Макс", phone: "+7(777)777-77-77", icon: "user3.png", favorite: true},
  {name: "Девяткинс", phone: "+7(480)048-48-80", icon: "user4.png", favorite: false},
];

let searchInput = document.getElementById("search-input");
let contactList = document.getElementById("contact-list");
let addButton = document.getElementById("add-button");
let modal = document.getElementById("modal");
let nameInput = document.getElementById("name-input");
let phoneInput = document.getElementById("phone-input");
let favoriteCheckbox = document.getElementById("favorite-checkbox");
let createButton = document.getElementById("create-button");
let findButton = document.getElementById("find-button");
let backButton = document.getElementById("back-button");

let originalContacts = contacts.slice();

let filteredContacts = [];

function displayContacts() {
  contactList.innerHTML = "";
  contacts.sort((a, b) => {
    if (a.favorite && !b.favorite) return -1;
    if (!a.favorite && b.favorite) return 1;
    return a.name.localeCompare(b.name);
  });
  for (let contact of contacts) {
    let li = document.createElement("li");
    li.classList.add("contact-item");
    li.innerHTML = `
      <img src="./img/check.png" alt="${contact.name}" class="contact-icon">
      <div class="contact-info">
        <p class="contact-name">${contact.name}</p>
        <p class="contact-phone">${contact.phone}</p>
      </div>
      <div class="contact-buttons">
        <button class="delete-button" data-name="${contact.name}">🗑️</button>
        <button class="favorite-button" data-name="${contact.name}">${contact.favorite ? "❤️" : "🤍"}</button>
      </div>
    `;
    li.querySelector(".delete-button").addEventListener("click", deleteContact);
    li.querySelector(".favorite-button").addEventListener("click", toggleFavorite);
    contactList.appendChild(li);
    console.log(typeof originalContacts)
  
  }
}

const originalsContacts = contacts;

function filterContacts() {
    let searchText = searchInput.value.toLowerCase();
    
    if (searchText === '') {
        contacts = originalsContacts;
    } else {
        contacts = originalsContacts.filter(contact => {
            return contact.name.toLowerCase().includes(searchText) || contact.phone.includes(searchText);
        });
    }
    
    displayContacts();
}

function deleteContact(event) {
  let name = event.target.dataset.name;
  contacts = contacts.filter(contact => contact.name !== name);
  displayContacts();
}

function toggleFavorite(event) {
  let name = event.target.dataset.name;
  for (let contact of contacts) {
    if (contact.name === name) {
      contact.favorite = !contact.favorite;
      break;
    }
  }
  displayContacts();
}

function openModal() {
  nameInput.value = "";
  phoneInput.value = "";
  favoriteCheckbox.checked = false;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function createContact() {
  let name = nameInput.value.trim();
  let phone = phoneInput.value;
  let favorite = favoriteCheckbox.checked;
  if (name && phone && validatePhone(phone)) {
    let contact = {
      name: name,
      phone: phone,
      favorite: favorite,
    };
    contacts.push(contact);
    displayContacts();
    closeModal();
    document.getElementById('contact-list').classList.remove('active-non')
    document.getElementById('add-button').classList.remove('active-non')
  } else {
    alert("Пожалуйста, заполните все поля корректно.");
  }
}

// Функция для валидации номера телефона по маске +7 (___) ___-__-__
function validatePhone(phone) {
  let regex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  return regex.test(phone);
}

searchInput.addEventListener("input", filterContacts);
addButton.addEventListener("click", openModal);
// findButton.addEventListener('click',filterContacts)
// backButton.addEventListener('click',displayContacts)

createButton.addEventListener("click", createContact);

window.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

displayContacts();

addButton.addEventListener('click' , (e) =>{
  document.getElementById('contact-list').classList.add('active-non')
  document.getElementById('add-button').classList.add('active-non')
})
  
createButton.addEventListener('click' , (e) =>{

})
// убрать в коде , что не нужно (айконы)
// Фикс валидации , на нормальную
// Добавить закрытй инпут на добавление контакта или просто убрать текст
// Добавить скрол