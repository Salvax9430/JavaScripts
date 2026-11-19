// objects in javascript
let user = {
  name: "Bramuel",
  age: 20,
  email: "bramuel@example.com",
  course: "Computer science"
};
console.log("User object: " + user);
console.log("User's name is: " + user.name);
console.log("User's age is: " + user.age);
console.log("User's email is: " + user.email);
console.log("User's course is: " + user.course);

console.log("User's name is: " + user["name"]);
console.log("User's age is: " + user["age"]);
console.log("User's email is: " + user["email"]);
console.log("User's course is: " + user["course"]);