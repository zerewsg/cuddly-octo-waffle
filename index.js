// var greet = function(name) {
//   console.log("Привет, " + name + "!");
// };
// greet("Миша");





// const calculate = function(a, b, operation) {
//   return operation(a, b);
// };

// const add = function(x, y) {
//   return x + y;
// };

// const subtract = function(x, y) {
//   return x - y;
// };

// const multiply = function(x, y) {
//   return x * y;
// };

// console.log(calculate(5, 3, add));     
// console.log(calculate(5, 3, subtract));  
// console.log(calculate(5, 3, multiply));  







// // Function Declaration всплывает , но в строгом режиме или в блочной области видимости они не доступны вне блока.

// let age = 16;
// let welcome; 

// if (age < 18) {
//   welcome = function() {
//     console.log("Привет!");
//   };
// } else {
//   welcome = function() {
//     console.log("Здравствуйте!");
//   };
// }

// welcome();




// const createCalculator = function() {
//   // Возвращаем объект с методами
//   return {
//     // Все методы созданы через Function Expression
//     add: function(a, b) {
//       return a + b;
//     },
//     subtract: function(a, b) {
//       return a - b;
//     },
//     multiply: function(a, b) {
//       return a * b;
//     },
//     divide: function(a, b) {
//       if (b === 0) {
//         throw new Error("Деление на ноль невозможно!");
//       }
//       return a / b;
//     }
//   };
// };

// // Пример использования
// const calculator = createCalculator();

// console.log(calculator.add(5, 3));      // 8
// console.log(calculator.subtract(5, 3)); // 2
// console.log(calculator.multiply(5, 3)); // 15
// console.log(calculator.divide(6, 3));   // 2