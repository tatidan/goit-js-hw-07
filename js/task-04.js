//Счетчик состоит из спана и кнопок, которые должны 
//увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет 
//хранится текущее значение счетчика.
//Создай функции increment и decrement для 
//увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки,
//вызовы функций и обновление интерфейса

const refs = {
  container: document.querySelector('#counter'),
  decrementBtn: refs.container.querySelector('data-action="decrement"'),
  incrementBtn: refs.container.querySelector('[data-action="increment"]'),
  value: refs.container.querySelector('#value]'),
};
  
console.log(refs.container);
console.log(decrementBtn);
let counterValueUI = 0;

refs.decrementBtn.addEventListener('click', () => {
  this.decrement();
  this.updateValue();
})
refs.incrementBtn.addEventListener('click', () => {
  this.increment();
  this.updateValue();
})

function increment(event) {
  counterValueUI += 1;
};
  
function decrement(event) {
  counterValueUI -= 1;
};

//function updateValue() { };
// это фунция обновления интерфейса





// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
//   onUpdate = () => null,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);

//   this.onUpdate = onUpdate;

//   this._bindEvents();
//   this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-increment]');
//   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//   refs.value = refs.container.querySelector('[data-value]');

//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.increment();
//     this.updateValueUI();
//   });

//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;

//   this.onUpdate();
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// new CounterPlugin({
//   rootSelector: '#counter-1',
//   step: 10,
//   initialValue: 100,
//   onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
// });

// new CounterPlugin({ rootSelector: '#counter-2', step: 2 });