//Напиши скрипт, который бы при потере фокуса на инпуте, 
//проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается 
//в его атрибуте data - length.
// Если введено подходящее количество, то border инпута 
//становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('input');
inputRef.classList.add('#validation-input');

inputRef.addEventListener('blur', event => {
  const input = event.target;
  
  if (input.value.length === +input.dataset.length) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
  else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  };
});


