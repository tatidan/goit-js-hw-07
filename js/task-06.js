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
  //если я меняю через removeAttr и setAttr, уже тут изменный id
  //плюс по условию мы действуем через classList.add
  console.log(input);
  console.log(input.value.length);
// при вводе 3х символов получаем 3
  
  console.log(inputRef);
  console.log(+input.dataset.length);
  
  if (input.value.length === +input.dataset.length) {
    console.log('correct and valid --- green border')
    inputRef.classList.remove('#validation-input');
    inputRef.classList.remove('#validation-input.invalid');
    inputRef.classList.add('#validation-input.valid');
  //  inputRef.removeAttribute('id');
  //  inputRef.setAttribute('id', 'validation-input.valid');

  }
  else {
    console.log('invalid --- red border');
    inputRef.classList.remove('#validation-input');
    inputRef.classList.remove('#validation-input.valid')
    inputRef.classList.add('#validation-input.invalid');
  //  inputRef.removeAttribute('id');
  //  inputRef.setAttribute('id', 'validation-input.invalid');
  };
});

//проверка работает, цвет border не меняется
