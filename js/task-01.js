// Напиши скрипт, который выполнит следующие операции.

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item.Получится 'В списке 3 категории.'.

// 2. Для каждого элемента li.item в списке ul#categories, 
//найдет и выведет в консоль текст заголовка элемента(тега h2) и
//количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

/*================1==================*/

const ulCategories = document.querySelector('#categories');

const subcategories = ulCategories.children;

console.log(`В списке ${subcategories.length} категории`);

/*=================2=================*/

const subCatArr = [...subcategories];

subCatArr.forEach(subCat => {
  const subCatTitle = subCat.querySelector('h2');
  console.log(`Категория: ${subCatTitle.textContent}`);

  const subCatItems = subCat.querySelectorAll('li');
  console.log(`Количество элементов: ${subCatItems.length}`)
});

/*=================2=================*/

//Console:

// В списке 3 категории
// task-01.js:29 Категория: Животные
// task-01.js:32 Количество элементов: 4
// task-01.js:29 Категория: Продукты
// task-01.js:32 Количество элементов: 3
// task-01.js:29 Категория: Технологии
// task-01.js:32 Количество элементов: 5

