// Создаем массив контактов
let contacts = [
  {name: "Алексей", phone: "+7(999)111-22-33", icon: "./img/check.png", favorite: true},
  {name: "Борис", phone: "+7(888)444-55-66", icon: "user2.png", favorite: false},
  {name: "Вера", phone: "+7(777)777-77-77", icon: "user3.png", favorite: true},
  {name: "Галина", phone: "+7(666)666-66-66", icon: "user4.png", favorite: false},
];

// Получаем элементы DOM
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

// Копируем массив контактов для отображения в исходном порядке
let originalContacts = contacts.slice();

// Массив для отображения отфильтрованных контактов
let filteredContacts = [];

// Функция для отображения контактов на странице
function displayContacts() {
  // Очищаем список контактов
  contactList.innerHTML = "";
  // Сортируем контакты по имени и избранности
  contacts.sort((a, b) => {
    if (a.favorite && !b.favorite) return -1;
    if (!a.favorite && b.favorite) return 1;
    return a.name.localeCompare(b.name);
  });
  // Для каждого контакта создаем элемент li с мини-карточкой
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
    // Добавляем обработчики событий для кнопок удаления и добавления в избранное
    li.querySelector(".delete-button").addEventListener("click", deleteContact);
    li.querySelector(".favorite-button").addEventListener("click", toggleFavorite);
    // Добавляем элемент li к списку контактов
    contactList.appendChild(li);
    console.log(typeof originalContacts)
  
  }
}

// Создаем переменную для хранения исходных контактов
const originalsContacts = contacts;

// Функция для фильтрации контактов по введенному тексту
function filterContacts() {
    // Получаем текст из поля поиска
    let searchText = searchInput.value.toLowerCase();
    
    // Проверяем, если текст пустой, возвращаем исходные контакты
    if (searchText === '') {
        contacts = originalsContacts;
    } else {
        // Фильтруем контакты по имени или телефону
        contacts = originalsContacts.filter(contact => {
            return contact.name.toLowerCase().includes(searchText) || contact.phone.includes(searchText);
        });
    }
    
    // Отображаем отфильтрованные контакты на странице
    displayContacts();
}

// Функция для удаления контакта по имени
function deleteContact(event) {
  // Получаем имя контакта из атрибута data-name кнопки
  let name = event.target.dataset.name;
  // Удаляем контакт из массива по имени
  contacts = contacts.filter(contact => contact.name !== name);
  // Отображаем обновленный список контактов на странице
  displayContacts();
}

// Функция для переключения статуса избранного для контакта по имени
function toggleFavorite(event) {
  // Получаем имя контакта из атрибута data-name кнопки
  let name = event.target.dataset.name;
  // Находим контакт в массиве по имени и меняем его свойство favorite на противоположное
  for (let contact of contacts) {
    if (contact.name === name) {
      contact.favorite = !contact.favorite;
      break;
    }
  }
  // Отображаем обновленный список контактов на странице
  displayContacts();
}

// Функция для открытия модального окна с формой добавления контакта
function openModal() {
  // Очищаем поля ввода и чекбокс
  nameInput.value = "";
  phoneInput.value = "";
  favoriteCheckbox.checked = false;
  // Показываем модальное окно
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
  // Скрываем модальное окно
  modal.style.display = "none";
}

// Функция для создания нового контакта из формы
function createContact() {
  // Получаем значения из полей ввода и чекбокса
  let name = nameInput.value.trim();
  let phone = phoneInput.value;
  let favorite = favoriteCheckbox.checked;
  // Проверяем валидацию полей
  if (name && phone && validatePhone(phone)) {
    // Создаем новый объект контакта с произвольной иконкой
    let contact = {
      name: name,
      phone: phone,
      favorite: favorite,
    };
    // Добавляем новый контакт к массиву контактов
    contacts.push(contact);
    // Отображаем обновленный список контактов на странице
    displayContacts();
    // Закрываем модальное окно
    closeModal();
    document.getElementById('contact-list').classList.remove('active-non')
    document.getElementById('add-button').classList.remove('active-non')
  } else {
    // Выводим сообщение об ошибке
    alert("Пожалуйста, заполните все поля корректно.");
  }
}

// Функция для валидации номера телефона по маске +7 (___) ___-__-__
function validatePhone(phone) {
  let regex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  return regex.test(phone);
}

// Добавляем обработчики событий для элементов DOM
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

// Отображаем контакты на странице при загрузке скрипта
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