// удаление

// const array = [1, 2, 3, 4, 5];
// const deletedArray = array.splice(2, 2);

// console.log(deletedArray);
// console.log(array);

// вставка

// array.splice(1, 0, "link", "link2");
// console.log(array);

// замена

// array.splice(1, 1, "l", "2222");
// console.log(array);

// Область видимотси

// var var1 = "string";

// if (true) {
//   var var1 = 10;
//   console.log(var1);
// }

// console.log(var1);

// функция

// функциональное выражение

// const generateRandomNumber = function(from = 0, to = 100) {
//   //   console.log("FROM:", from);
//   //   console.log("TO:", to);

//   return Math.round(Math.random() * (to - from) + from);
// };

// let us = prompt("ddd");
// let uss = prompt("d");

// generateRandomNumber(us, uss);
// generateRandomNumber(30, 40);
// generateRandomNumber(50, 60);

// console.log(generateRandomNumber());
// console.log(generateRandomNumber(7, 88));
// console.log(generateRandomNumber(40, 255));

// const hello = function(age, name = "qwe") {
//   //   let name = prompt("ведите имя");
//   //   console.log("Hello ", name);
//   return;
// };

// console.log(hello());

// const getSum = function() {
//   let total = 0;
//   //   const array = Array.from(arguments);
//   const array = [...arguments];

//   for (const num of Array.from(arguments)) {
//     total += num;
//   }

//   return total;
// };

// console.log(getSum(2, 3, 4, 5, 6, 3, 4, 5));
// const sum2 = getSum(1, 2);

// console.log(sum1);
// console.log(sum2);

// const isPasswordValid = function(password) {
//   if (password.length == 0) {
//     // console.log("Пароль пустой.");
//     return "Пароль пустой.";
//   }

//   if (password.length < 8) {
//     // console.log("Недопустимая длинна строки.");
//     return "Недопустимая длинна строки.";
//   }

//   return "Пароль валидный.";
// };

// console.log(isPasswordValid(""));
// console.log(isPasswordValid("ddd"));
// console.log(isPasswordValid("ssssssssss"));

// helloWorld();

// function helloWorld() {
//   console.log("Hello World");
// }

// console.log(helloWorld());

// стрелочные функции

const sum1 = function(a, b, c) {
  return a + b + c;
};

const sum2 = (a, b, c) => a + b + c;

const sum3 = function(a, b, c) {
  if (a == b) return a + b + c;
};
