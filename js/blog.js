// Функция для открытия модального окна
function openModal(modal) {
    modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal(modal) {
    modal.style.display = 'none';
}

// Получаем элементы для первого модального окна
const modal1 = document.getElementById('myModal1');
const openModalBtn1 = document.getElementById('openModalBtn1');
const closeModalBtn1 = document.getElementById('closeModalBtn1');

// Открытие первого модального окна
openModalBtn1.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(modal1);
});

// Закрытие первого модального окна при клике на крестик
closeModalBtn1.addEventListener('click', function() {
    closeModal(modal1);
});

// Закрытие первого модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target === modal1) {
        closeModal(modal1);
    }
});

// Получаем элементы для второго модального окна
const modal2 = document.getElementById('myModal2');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn2 = document.getElementById('closeModalBtn2');

// Открытие второго модального окна
openModalBtn2.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(modal2);
});

// Закрытие второго модального окна при клике на крестик
closeModalBtn2.addEventListener('click', function() {
    closeModal(modal2);
});

// Закрытие второго модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target === modal2) {
        closeModal(modal2);
    }
});
