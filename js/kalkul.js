const calcButton = document.getElementById('calcButton');
const slideCalculator = document.getElementById('calculator');
const closeCalcButton = document.querySelector('.close-calc-btn');

const contactButton = document.getElementById('contactButton');
const slideContact = document.getElementById('contactInfo');
const closeContactButton = document.querySelector('.close-contact-btn');

// Открытие/закрытие калькулятора при клике на кнопку
calcButton.onclick = function() {
    if (slideCalculator.classList.contains('active')) {
        slideCalculator.classList.remove('active'); // Если открыт, закрыть
    } else {
        slideCalculator.classList.add('active'); // Если закрыт, открыть
    }
}

// Закрытие калькулятора при нажатии на крестик
closeCalcButton.onclick = function() {
    slideCalculator.classList.remove('active');
}

// Открытие/закрытие контактов при клике на кнопку
contactButton.onclick = function() {
    if (slideContact.classList.contains('active')) {
        slideContact.classList.remove('active'); // Если открыто, закрыть
    } else {
        slideContact.classList.add('active'); // Если закрыто, открыть
    }
}

// Закрытие контактов при нажатии на крестик
closeContactButton.onclick = function() {
    slideContact.classList.remove('active');
}

// Логика для калькулятора
let calcInput = document.getElementById('calc-input');
let buttons = document.querySelectorAll('.calc-btn');
let currentValue = '';
let operator = '';
let previousValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            // Очистить все значения
            calcInput.value = '';
            currentValue = '';
            previousValue = '';
            operator = '';
        } else if (value === '=') {
            // Выполнить вычисление
            if (operator && previousValue !== '') {
                currentValue = eval(previousValue + operator + currentValue);
                calcInput.value = currentValue;
                operator = '';
                previousValue = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Установить оператор
            operator = value;
            previousValue = currentValue;
            currentValue = '';
        } else {
            // Добавить число
            currentValue += value;
            calcInput.value = currentValue;
        }
    });
});
