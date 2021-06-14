  
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Напиши скрипт, который для каждого элемента массива ingredients 
//создаст отдельный li, после чего вставит все li за одну операцию 
//в список ul.ingredients.
//Для создания DOM-узлов используй document.createElement().


//const createLiEl = ingredients.map()

const liElem = document.createElement('li');
liElem.textContent = "potato";

const ingredientsNode = document.querySelector('#ingredients');
console.log(ingredientsNode);
ingredientsNode.append(liElem);



//const createElement = function (newTagName, str) {
//    const newTag = document.createElement(NewTagName);​
//    newTag.textContent = str;
//ingredients.forEach(item => createElement('li',
//  item.text, ulNode));
