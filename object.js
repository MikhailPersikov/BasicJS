// 1) Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

//Ответ:

// const user = {};
// user.name = "John";
// user.surname = "Smith"
// user.name = "Pete";
// delete user.name

// console.log(user);


//-------------------------------------------------------------------------------

//2) Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

//Ответ:

// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }

// 3) Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
//Ответ да const защищает только переменную от изменений. 

// const a = {};
// a.name = null;
// console.log(a);

// a = "asd" //TypeError: Assignment to constant variable.

// console.log(a);
//-------------------------------------------------------------------------------
// 4) У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// let sum = 0;

// for (let key in salaries){
//     sum +=salaries[key] 
// }

// console.log(sum)

//5) Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   function multiplyNumeric(obj){
//       for(let key in obj){
//           if(typeof obj[key] == "number"){
//             obj[key] = obj[key] *2;
//           }
//           else break
//       }
//   }

//  multiplyNumeric(menu);
  
//  console.log(menu)
//   // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

//-------------------------------------------------------------------------------





