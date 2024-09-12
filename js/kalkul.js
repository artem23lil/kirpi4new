const calcButton = document.getElementById('calcButton');
const slideCalculator = document.getElementById('calculator');
const closeCalcButton = document.querySelector('.close-calc-btn');

const contactButton = document.getElementById('contactButton');
const slideContact = document.getElementById('contactInfo');
const closeContactButton = document.querySelector('.close-contact-btn');

calcButton.onclick = function() {
    slideCalculator.classList.add('active');
}


closeCalcButton.onclick = function() {
    slideCalculator.classList.remove('active');
}

contactButton.onclick = function() {
    slideContact.classList.add('active');
}


closeContactButton.onclick = function() {
    slideContact.classList.remove('active');
}


let calcInput = document.getElementById('calc-input');
let buttons = document.querySelectorAll('.calc-btn');
let currentValue = '';
let operator = '';
let previousValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            calcInput.value = '';
            currentValue = '';
            previousValue = '';
            operator = '';
        } else if (value === '=') {
            if (operator && previousValue !== '') {
                currentValue = eval(previousValue + operator + currentValue);
                calcInput.value = currentValue;
                operator = '';
                previousValue = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousValue = currentValue;
            currentValue = '';
        } else {
            currentValue += value;
            calcInput.value = currentValue;
        }
    });
});
