// Напиши скрипт, который выполнит следующие операции.

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item.Получится 'В списке 3 категории.'.

// 2. Для каждого элемента li.item в списке ul#categories, 
//найдет и выведет в консоль текст заголовка элемента(тега h2) и
//количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

/*================1=DONE=================*/

const ulCategories = document.querySelector('#categories');

const liItem = ulCategories.children;
//console.log(liItem.length); // 3 это количество ul-ок
// животные, продукты, технологии

console.log(`В списке ${liItem.length} категории`);


/*=================2=================*/

const catElements = document.querySelectorAll('.item');
console.log(catElements); //это категория, вложенный ul

console.log(...ulCategories.children);

const catItems = document.querySelector('h2');
console.log(catItems);

const testEl = ulCategories.querySelectorAll('ul');
const testElChild = testEl.querySelectorAll('li');
console.log(testEl);
console.log(testElChild);
//тут массив ul (животные, продукты, технологии)

 

//перебрать массив после стр.29 методом forEach
// у каждого item достать h2 и количество li в ul




