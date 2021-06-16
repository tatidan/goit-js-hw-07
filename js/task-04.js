//Счетчик состоит из спана и кнопок, которые должны 
//увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет 
//хранится текущее значение счетчика.
//Создай функции increment и decrement для 
//увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки,
//вызовы функций и обновление интерфейса

const container = document.querySelector('#counter');
const decrementBtn = container.querySelector('button[data-action="decrement"]');
const incrementBtn = container.querySelector('button[data-action="increment"]');
const value = container.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement(event) {
  counterValue -= 1;
  console.log(counterValue);
  updateValue();
};
function increment(event) {
  counterValue += 1;
  console.log(counterValue);
  updateValue();
};
function updateValue() {
  value.textContent = `${counterValue}`;
 };
