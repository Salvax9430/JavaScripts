/*let name = 'Bramuel';// string variable
let age = 25;// number variable
let isStudent = true;//boolean variable
let salary = null;//null variable
console.log( "Name is " + name);
console.log("Age is " + age);
console.log("Is Student is " + isStudent);
console.log("Salary is " + salary);
// undefined variable
let address;
console.log("Address is " + address);
*/

let studentName = "Bramuel";
let age = 20;
let graduationYear = null;
let bigIntNumber = 1234567890123456789012345678901234567890n;
let uniqueId = Symbol("id");
let studtobje = {
  name: studentName,
  age: age,
  graduationYear: graduationYear
};
console.log(typeof studentName); // Output: string
console.log(typeof age);
console.log(typeof bigIntNumber);
console.log(typeof uniqueId);
console.log(typeof studtobje);
// console.log("The unique id is " + uniqueId);
console.log("The middle name is " + studtobje["middleName"]);