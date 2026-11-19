/*let recap = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
console.log("Here are some of the technologies i have learnt so far",recap);
// picking any items fro the array
console.log('I have learnt '+ recap[1] + " as my first langage and " + recap[2] + "to style my web pages");
console.log("I have also learnt "+ recap[3] + " to build my front end and " + recap[4] + " to build my back end");
console.log("The languages in array are as follows in order: " + recap[0] + " , " + recap[1] + " , " + recap[2] + " , " + recap[3] + " , " + recap[4]);
// Updating ites in the array
recap[0] = "Python";// Hree we are updating the first item in the array from JavaScript to Python
console.log("Here are some of the technologies i have learnt so far",recap);
console.log('I have learnt '+ recap[0] + " as my first langage and " + recap[1] + "to style my web pages");
console.log("I have also learnt "+ recap[0] + " as my first language and " + recap[1] + " to style my web pages");
console.log("The languages in array are as follows in order: " + recap[0] + " , " + recap[1] + " , " + recap[2] + " , " + recap[3] + " , " + recap[4]);
// getting specific elements from array either be index or name and also using more functionalities and methodes
console.log("Here is the first element in the array: " + recap[0]);
console.log("Here is the second element in the array: " + recap[1]);
console.log("Here is the last element in the array: " + recap[4]);
console.log("Here is the length of the last element in the array: " + recap[recap.length - 1]);
console.log("Here is the length of the array: " + recap.length);
console.log("Here is the index of React in the array: " + recap.indexOf("React"));
console.log("Here is the index of Node.js in the array: " + recap.indexOf("Node.js"));
console.log("The length of the whole array is: " + recap.length);
// adding and removing items from the array?
let AddedItem = recap.push("Django");// adding an item to the end of the array
console.log("We have added "+ recap[recap.length - 1] + " to the array");
console.log("Here are some of the technologies i have learnt so far",recap);
let TheRemovedItem = recap.pop(0);// removing an item from the end of the array
console.log("We have removed "+ TheRemovedItem + " from the array");
console.log("Our final array is: " + recap);
// updatind an item using indes in array
recap[0] = "Python";// updating the first item in the array
console.log("Our updated array is: " + recap);
recap[6] = "Java";// adding an item to the end of the array using index
console.log("Our final array is: " + recap);
recap[5] = "C++";// adding an item to the end of the array using index
console.log("Our final array is: " + recap);
// shifting an item from the beginning of the array and unshifting an item to the beginning of the array
let shiftedItem = recap.shift();// removing an item from the beginning of the array
console.log("We have removed "+ shiftedItem + " from the array");
console.log("Our final array is: " + recap);
let unshiftedItem = recap.unshift("JavaScript");// adding an item to the beginning of the array
console.log("We have added "+ unshiftedItem + " to the array");
console.log("Our final array is: " + recap);
//splice method to add and remove items from the array ata a specific index
recap.splice(2, 1, "c#", "Ruby");// removing an item from the array at index 2 and adding an item at index 2 and also remooving item at index 1 and adding an item at index 1 
console.log("Our final array is: " + recap);

*/
// Datatypesin Jvascript
/*
number
srting
boolean
null
undefined
object
bigint
symbol
*/

let userName;
console.log("The value of username is: " + userName);
let user = {name: "Bramuel",age: 20, email:"",course: "Computer science"};
console.log("here, email is :" + user.email);
console.log("here, name is :" + user.name);

// functions in javascripts
function addition(a, b) {
  let sum = a + b;
  console.log("The sum is: " + sum);
  return sum;
}

addition(2026, -2006); // Output: The sum is: 20

// do while loop
let i = 5;
do {
    console.log("The value of i is: " + i);
    i++;
} while (i < 10);
// for loop
for (let j = 0; j < 5; j++) {
    console.log("The value of j is: " + j);
}
// while loop
let k = 0;
while (k < 5) {
    console.log("The value of k is: " + k);
    k++;
}