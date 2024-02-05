// function yazdirMerhaba() {
//   console.log("Merhaba 2024");
// }
// yazdirMerhaba();
// yazdirMerhaba();
// yazdirMerhaba();

// function yazdirParametre(message, year = new Date().getFullYear()) {
//   console.log(message, year);
// }
// yazdirParametre("hi", "2025");
// yazdirParametre("salut", "2026");
// yazdirParametre("hola", "2027");
// yazdirParametre("hallo");
// yazdirParametre();
// yazdirParametre(12.4, true);

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name} is ${age} years old`);
//   return age;
// }
// console.log(calculate("Ahmet", 1990));
// const ismetAge = calculate("ismet", 1890);
// console.log("Ismet's Age:", ismetAge);

// function add(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// function addShort(num1, num2) {
//   return num1 + num2;
// }

// const result1 = add(3, 5);
// const result2 = add(5, 9);
// const result3 = addShort(47, 3);
// console.log(result1, result2, result3);

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "EVEN";
//   } else {
//     return "ODD";
//   }
// }
// function isEvenOrOdd(num) {
//   return num % 2 === 0 ? "EVEN" : "ODD";
// }
// const num = prompt("Please enter a number:");
// console.log(`${num} is ${isEvenOrOdd(num)}`);

const yazdir = function (message) {
  console.log(message);
};
yazdir("Hallo 2024");

let oddEven = function (number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

console.log(oddEven(5));
console.log(oddEven(2));
