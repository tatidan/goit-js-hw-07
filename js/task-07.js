// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.


const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');


inputRef.addEventListener('input', (event) => {
  textRef.classList.replace('font-size1', 'font-size2');
});
 
//window.addEventListener("input", cb);

//где взять font-size1, font-size2? как будет меняться его значение?