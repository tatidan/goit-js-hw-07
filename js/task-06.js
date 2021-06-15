//Напиши скрипт, который бы при потере фокуса на инпуте, 
//проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается 
//в его атрибуте data - length.
// Если введено подходящее количество, то border инпута 
//становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', event => {
  const input = event.target;
  console.log(input);
  console.log(input.value.length);
  //return input.value.length;

  (input.value.length === input.dataset.length) ? (inputRef.id.classList.add('valid')) : (inputRef.id.classList.add('invalid'));
});

//inputRef.addEventListener('focus', event => {
//  inputRef.id.classList.remove('invalid');
//});

// тернарник не работает, класс к id не добавляется, и с точкой и без
// нужно ли добавить remove?

